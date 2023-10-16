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
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from "@/redux/api/servicesApi";
import { ICategory } from "@/types/globalType";
import { useGetAllBookingsQuery } from "@/redux/api/bookingApi";

const ManageBookingPage = () => {
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

  const { data, isLoading } = useGetAllBookingsQuery({
    ...query,
  });
  const bookings = data?.bookings;
  const meta = data?.meta;
  const [deleteService] = useDeleteServiceMutation();

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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ContactNo",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Price($)",
      dataIndex: "price",
      key:"price"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
          <Tooltip title="View Details" placement="top" color={"#0496ff"}>
              <Link href={`/admin/manage-booking/view/${data?.id}`}>
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EyeFilled />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip title="Update Status" placement="top" color={"#0496ff"}>
              <Link href={`/admin/manage-booking/update/${data?.id}`}>
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
            </Tooltip>
            
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Service List</h1>
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
              <Button onClick={filterReset} type="primary">
                Reset
                <ReloadOutlined />
              </Button>
            )}
          </div>
        </div>
        <div>
          <Link href={"/admin/manage-service/create"}>
            <Button type="primary">Create Service</Button>
          </Link>
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

export default ManageBookingPage;
