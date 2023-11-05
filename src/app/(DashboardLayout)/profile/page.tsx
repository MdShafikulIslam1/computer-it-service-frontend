/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  useGetSingleUserQuery,
} from "@/redux/api/userApi";
import { getUserInfo } from "@/service/authentication.service";
import { EditFilled, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import {
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  message,
} from "antd";
import { useState } from "react";
import dayjs from "dayjs";
const ProfilePage = () => {
   const user = getUserInfo() as any;
  const { role, email } = user;
  const { data } = useGetSingleUserQuery(email);

  return (
    <div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          margin: "10px",
          height: "100vh",
        }}
      >
        <Col
          style={{
            height: "100%",
          }}
          className="shadow-md"
          span={6}
        >
          <div className="flex flex-col mx-auto items-center justify-center h-48 w-48  my-10">
            <div>
              {!!data?.profileImage ? (
                <Image
                  src={data?.profileImage || ""}
                  alt="service image"
                  width={192}
                  height={192}
                  className="object-center w-full h-full rounded-2xl"
                  priority
                />
              ) : (
                <Avatar
                  size={192}
                  icon={<UserOutlined className="text-center" />}
                >
                  Not Found
                </Avatar>
              )}
            </div>
            <p className="font-bold text-xl text-green-500 my-2 ">
              {data?.name}
            </p>
          </div>
          <p className="mt-4">
            Member since:{" "}
            <span className="text-blue-400 text-md">
              {dayjs(`${data?.createdAt}`).format("MMM D, YYYY")}
            </span>
          </p>
        </Col>
        <Col span={18}>
          <div className="p-4">
            <Card title="User Profile" extra={<Button href={`/profile/update/${email}`} type="primary" icon={<EditFilled />}>Edit profile</Button>}>
              <Space direction="vertical">
                <Typography.Text strong>Name : <span className="font-normal ml-2">{data?.name}</span></Typography.Text>
                <Typography.Text strong>Email : <span className="font-normal ml-2">{data?.email}</span></Typography.Text>
                <Typography.Text strong>Contact No : <span className="font-normal ml-2">{data?.contactNo}</span></Typography.Text>
                <Typography.Text strong>Emergency Contact No : <span className="font-normal ml-2">{data?.emergencyContactNo}</span></Typography.Text>
                <Typography.Text strong>Date Of Birth : <span className="font-normal ml-2">{data?.dateOfBirth}</span></Typography.Text>
                <Typography.Text strong>Nationality : <span className="font-normal ml-2">{data?.nationality}</span></Typography.Text>
                <Typography.Text strong>Availability : <span className="font-normal ml-2">{data?.availability}</span></Typography.Text>            
                            
              </Space>
            </Card>
          </div>
          </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
