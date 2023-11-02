"use client";
import DeletePromptButton from "@/components/DeletePromptButton/DeletePromptButton";
import UMTable from "@/components/Table/UMTable";
import Tooltip from "@/components/Tooltip/Tooltip";
import dayjs from "dayjs";

import {
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounced } from "@/hooks/useDebounced";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from "@/redux/api/servicesApi";
import { ICategory } from "@/types/globalType";
import Loading from "@/components/LoadingComponent/LoadingComponent";

const ManageServicePage = () => {
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

  const { data, isLoading } = useGetAllServicesQuery({ ...query });
  <Loading isLoading={isLoading} />;

  const services = data?.services;
  console.log(services);
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
      title: "Service Fee($)",
      dataIndex: "fee",
      key: "fee",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: function (data: ICategory) {
        return data && data?.title;
      },
    },
    {
      title: "Repair Time(Min)",
      dataIndex: "durationInMinutes",
      key: "time",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY ");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Tooltip title="Update" placement="left" color={"#0496ff"}>
              <Link href={`/admin/manage-service/update/${data?.id}`}>
                <Button
                  style={{ fontWeight: "bold", margin: "0px 5px" }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EditOutlined />
                </Button>
              </Link>
            </Tooltip>
            <DeletePromptButton data={data} deleteHandler={deleteHandler} />
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
          <Link href={"/admin/manage-service/create"}>
            <Button style={{ fontWeight: "bold" }} type="primary">
              Create Service
            </Button>
          </Link>
        </div>
      </div>
      <UMTable
        columns={columns}
        dataSource={services}
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

export default ManageServicePage;
