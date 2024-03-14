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
  ArrowLeftOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import UMTable from "@/components/Table/UMTable";
import DeletePromptButton from "@/components/DeletePromptButton/DeletePromptButton";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

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
              {!!data?.imageUrl && (
                <Image
                  src={data?.imageUrl}
                  alt="Service Image"
                  width={500}
                  height={500}
                  className="object-center w-full h-full rounded-full"
                />
              )}
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
  const totalQuantity = carts?.reduce(
    (total: number, item: Record<string, any>) => total + item?.quantity,
    0
  );
  console.log("total quantity", totalQuantity);
  const totalPrice = carts?.reduce(
    (total: number, item: Record<string, any>) => total + item?.price,
    0
  );

  return (
    <>
      <div className="bg-white">
        <div className="grid gap-4 grid-cols-12 mt-12 items-center">
          <div className="col-span-8 min-h-full ">
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
                      <Button
                        style={{ fontWeight: "bold" }}
                        onClick={filterReset}
                        type="primary"
                      >
                        Reset
                        <ReloadOutlined />
                      </Button>
                    )}
                  </div>
                </div>
                <div>
                  <Link href={"/service"}>
                    <Button
                      className="bg-primary"
                      type="primary"
                      icon={<ArrowLeftOutlined />}
                    >
                      Back to services
                    </Button>
                  </Link>
                </div>
              </div>
              <UMTable
                columns={columns}
                dataSource={carts}
                loading={isLoading}
                pageSize={size}
                total={meta?.total}
                showPagination={false}
                // onPaginationChange={onPaginationChange}
                // onTableChange={onTableChange}
              />
            </div>
          </div>
          {/* cart details (amount) */}
          <div className="col-span-4 shadow-xl min-h-full rounded-xl">
            <div className=" p-10 space-y-5">
              <h1 className="text-center text-2xl font-bold">Cart Totals</h1>
              <hr />
              <div>
                <p className="text-xl font-medium text-gray-500">
                  Subtotal : <span className="ml-8">$ {totalPrice}</span>
                </p>
                <p className="text-2xl font-semibold ">
                  Total :<span className="ml-8">$ {totalPrice}</span>
                </p>
              </div>
              <div className="mt-12">
                <Link href="/checkout" style={{ margin: "10px 0" }}>
                  <PrimaryButton title="Proceeded" isBlock={true} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10">
          <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <Image
                  src=""
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <Image
                  src=""
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    ,000
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <Image
                  src=""
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <Image
                  src=""
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    ,000
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div
            id="summary"
            className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CartPage;
