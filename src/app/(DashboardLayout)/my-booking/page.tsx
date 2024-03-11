"use client";
import DeletePromptButton from "@/components/DeletePromptButton/DeletePromptButton";
import UMTable from "@/components/Table/UMTable";
import Tooltip from "@/components/Tooltip/Tooltip";
import dayjs from "dayjs";

import {
  EditOutlined,
  EyeFilled,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounced } from "@/hooks/useDebounced";
import { useDeleteServiceMutation } from "@/redux/api/servicesApi";

import {
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import { getUserInfo } from "@/service/authentication.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { usePaymentInitializeMutation } from "@/redux/api/paymentApi";

const MyBookingPage = () => {
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
  //common code for filtering(END)
  const { email } = getUserInfo() as any;
  const { data: user } = useGetSingleUserQuery(email);
  const { data, isLoading } = useGetAllBookingsQuery({
    ...query,
    userId: user?.id,
  });
  const bookings = data?.bookings;
  const meta = data?.meta;
  const [deleteService] = useDeleteServiceMutation();
  const [paymentInitialize] = usePaymentInitializeMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting ...");
    try {
      message.success("pore implement korbo");
      //   await deleteService(id);
      //   message.success("Deleted Successfully");
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  //cancel my booking
  const [updateBooking] = useUpdateBookingMutation();

  const cancelBooking = async (id: string) => {
    try {
      const res = await updateBooking({
        id,
        data: { status: "CANCEL" },
      }).unwrap();
      if (res.id) {
        message.success("Your booking has been canceled");
      }
    } catch (error: any) {
      message.error(error?.message);
    }
  };

  const handlePayment = async (data: any) => {
    console.log("booking", data);
    const { url } = await paymentInitialize({
      bookingId: data?.id,
      amount: data?.price,
    }).unwrap();
    window.location.href = url;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "user",
      key: "name",
      render: function (params: any) {
        return params && params?.name;
      },
    },
    {
      title: "Email",
      dataIndex: "user",
      key: "email",
      render: function (data: any) {
        return data && data?.email;
      },
    },
    {
      title: "ContactNo",
      dataIndex: "user",
      key: "contactNo",
      render: function (data: any) {
        return data && data?.contactNo;
      },
    },
    {
      title: "Price($)",
      dataIndex: "price",
      key: "price",
    },

    // {
    //   title: "Booking Cancel",
    //   render: function (data: any) {
    //     return (
    //       <div>
    //         <Button
    //           style={{ fontWeight: "bold" }}
    //           onClick={() => cancelBooking(data?.id)}
    //           disabled={data?.status === "CANCEL"}
    //         >
    //           Cancel
    //         </Button>
    //       </div>
    //     );
    //   },
    // },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },
    {
      title: "Status",
      key: "status",
      render: function (data: any) {
        return (
          <div>
            <Button
              className={`${
                data?.status === "PAY"
                  ? "bg-secondary"
                  : data.status === "PAID"
                  ? "bg-primary"
                  : "bg-white text-black"
              } text-white font-bold`}
              onClick={() => handlePayment(data)}
              disabled={data?.status === "PAID"}
            >
              {data?.status === "PAY" ? "PAY" : data.status}
            </Button>
          </div>
        );
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Tooltip title="View Details" placement="top" color={"#0496ff"}>
              <Link href={`/admin/manage-booking/view/${data?.id}`}>
                <Button
                  style={{ fontWeight: "bold", margin: "0px 5px" }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EyeFilled />
                </Button>
              </Link>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>My booking List</h1>
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
            onChange={(e) => setSearchTerm(e.target.value)}
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
      </div>
      <UMTable
        columns={columns}
        dataSource={bookings}
        loading={isLoading}
        pageSize={size}
        total={meta?.total}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showSizeChanger={true}
      />
    </div>
  );
};

export default MyBookingPage;
