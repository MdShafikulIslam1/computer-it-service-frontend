"use client";
import { Button, Empty, Input, message } from "antd";
import Tooltip from "@/components/Tooltip/Tooltip";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  useDeleteCartMutation,
  useGetAllCartsQuery,
} from "@/redux/api/cartApi";
import { getUserInfo } from "@/service/authentication.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/hooks/useDebounced";
import { useState } from "react";
import dayjs from "dayjs";
import {
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import UMTable from "@/components/Table/UMTable";
import DeletePromptButton from "@/components/DeletePromptButton/DeletePromptButton";
import Image from "next/image";

const CartPage = () => {
  const query: Record<string, unknown> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debounceValue = useDebounced({ searchQuery: searchTerm, delay: 600 });
  if (!!debounceValue) {
    query["searchTerm"] = searchTerm;
  }
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const filterReset = () => {
    setSortBy("");
    setSearchTerm("");
    setSortOrder("");
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  // cart columns
  const columns = [
    {
      title: "Image",
      dataIndex: "service",
      key: "name",
      render: function (data: any) {
        return (
          data && (
            <div className="h-20 w-20 rounded-full bg-gray-400">
              <Image
                src={data?.imageUrl}
                alt="Service Image"
                width={500}
                height={500}
                className="object-center w-full h-full rounded-full"
                priority
              />
            </div>
          )
        );
      },
    },
    {
      title: "Service Name",
      dataIndex: "service",
      key: "service",
      render: function (data: any) {
        return data && data.name;
      },
    },
    {
      title: "Price($)",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            {/* <Tooltip title="Update" placement="left" color={"#0496ff"}>
              <Link href={`/super_admin/manage-department/edit/${data?._id}`}>
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EditOutlined />
                </Button>
              </Link>
            </Tooltip> */}
            <DeletePromptButton data={data} deleteHandler={deleteHandler} />
          </>
        );
      },
    },
  ];
  const [deleteCart] = useDeleteCartMutation();
  const deleteHandler = async (id: string) => {
    message.loading("Deleting ...");
    try {
      const res = await deleteCart(id).unwrap();

      if (res?.id) {
        message.success("successfully delete from your cart");
      }
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  //common code for filtering(END)
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const { email } = getUserInfo() as any;
  const { data } = useGetSingleUserQuery(email);
  const { data: cartAllData, isLoading } = useGetAllCartsQuery({
    limit: 100,
    page: 1,
    userId: data?.id,
  });
  const carts = cartAllData?.carts;
  const meta = cartAllData?.meta;
  const totalPrice = carts?.reduce(
    (total: number, item: Record<string, any>) => total + item?.price,
    0
  );

  return (
    <div className="bg-white">
      <div className="grid gap-4 grid-cols-12 mt-12 items-center">
        <div className="col-span-8 min-h-full border">
          {/* cart item table list */}
          <div>
            <h1>Cart item List</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  addonBefore={<SearchOutlined />}
                  type="text"
                  size="large"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                  }}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                />

                <div
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  {(!!sortBy || !!sortOrder || !!searchTerm) && (
                    <Button onClick={filterReset} type="primary">
                      Reset
                      <ReloadOutlined />
                    </Button>
                  )}
                </div>
              </div>
              <div>
                <Link href={"/service"}>
                  <Button type="primary">See Service</Button>
                </Link>
              </div>
            </div>
            <UMTable
              columns={columns}
              dataSource={carts}
              loading={isLoading}
              pageSize={size}
              total={meta?.total}
              onPaginationChange={onPaginationChange}
              onTableChange={onTableChange}
              showSizeChanger={true}
            />
          </div>
        </div>
        {/* cart details (amount) */}
        <div className="col-span-4 shadow-2xl min-h-full rounded-xl">
          <div className="border p-10 space-y-5">
            <h1 className="text-center text-2xl font-bold">Cart Totals</h1>
            <hr />
            <div className="">
              <p className="text-xl font-medium text-gray-500">
                Subtotal : <span className="ml-8">$ {totalPrice}</span>
              </p>
              <p className="text-2xl font-semibold ">
                Total :<span className="ml-8">$ {totalPrice}</span>
              </p>
            </div>
           <Link href="/checkout">
           <Button block type="primary">
              Proceed to checkout
            </Button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
