/* eslint-disable react/no-unescaped-entities */
"use client";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/service/authentication.service";
import {
  EditFilled,
  UserOutlined,
  PhoneFilled,
  MailFilled,
  CalendarFilled,
  FlagFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import Image from "next/image";
import { Avatar, Button, Card, Col, Row, Space, Typography } from "antd";
import dayjs from "dayjs";
const ProfilePage = () => {
  const user = getUserInfo() as any;
  const { role, email } = user;
  const { data } = useGetSingleUserQuery(email);

  return (
    <div className="flex gap-2">
      <div className="md:w-96 w-full">
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white  rounded-lg">
          <div className="rounded-t-lg h-32 overflow-hidden relative">
            <Image
              className="object-cover w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
              fill
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <Image
              className="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
              fill
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">Sarah Smith</h2>
            <p className="text-gray-500">Freelance Web Designer</p>
          </div>
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <div>2k</div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <div>10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <div>15</div>
            </li>
          </ul>
          <div className="p-4 border-t mx-8 mt-2">
            <Button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold px-6 py-2">
              Follow
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* <div className="">
          <Card
            title="User Profile"
            extra={
              <Button
                href={`/profile/update/${email}`}
                type="primary"
                icon={<EditFilled />}
              >
                Edit profile
              </Button>
            }
          >
            <Space size="large" direction="vertical">
              <Typography.Text strong className="md:text-xl">
                <UserOutlined className="text-primary me-2" /> Name :{" "}
                <span className="font-normal ml-2">{data?.name}</span>
              </Typography.Text>
              <Typography.Text strong className="md:text-xl">
                <MailFilled className="text-primary me-2" /> Email :{" "}
                <span className="font-normal ml-2">{data?.email}</span>
              </Typography.Text>
              <Typography.Text strong className="md:text-xl">
                <PhoneFilled className="text-primary me-2" /> Contact No :{" "}
                <span className="font-normal ml-2">{data?.contactNo}</span>
              </Typography.Text>
              <Typography.Text strong className="md:text-xl">
                <PhoneFilled className="text-primary me-2" /> Emergency Contact
                No :{" "}
                <span className="font-normal ml-2">
                  {data?.emergencyContactNo}
                </span>
              </Typography.Text>
              <Typography.Text strong className="md:text-xl">
                <CalendarFilled className="text-primary me-2" /> Date Of Birth :{" "}
                <span className="font-normal ml-2">{data?.dateOfBirth}</span>
              </Typography.Text>
              <Typography.Text strong className="md:text-xl">
                {" "}
                <FlagFilled className="text-primary me-2 " /> Nationality :{" "}
                <span className="font-normal ml-2">{data?.nationality}</span>
              </Typography.Text>
              <Typography.Text strong className="md:text-xl">
                <CheckCircleFilled className="text-primary me-2 " /> Status :{" "}
                <span className="font-normal ml-2">
                  {data?.availability ? (
                    <span className="text-secondary font-medium">Active</span>
                  ) : (
                    <span className="text-secondary font-medium">Blocked</span>
                  )}
                </span>
              </Typography.Text>
            </Space>
          </Card>
        </div> */}
        <div className="bg-white overflow-hidden rounded-lg border">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-blue-600">
                Welcome to Your Profile!
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-700">
                Explore your profile to learn more about yourself!
              </p>
            </div>
            <div>
              <Button
                href={`/profile/update/${email}`}
                type="primary"
                icon={<EditFilled />}
              >
                Edit profile
              </Button>
            </div>
          </div>
          {/* <Card
            title="User Profile"
            extra={
             
            }
          /> */}
          <div className="border-t border-primary px-4 py-5 sm:p-0">
            <dl className="sm:divide-y divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">Full name</dt>
                <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  johndoe@example.com
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  (123) 456-7890
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  123 Main St
                  <br />
                  Anytown, USA 12345
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col mx-auto items-center justify-center h-48 w-48  my-10">
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
                <div className="flex justify-center items-center ring-2 ring-secondary rounded-full bg-primary">
                  <Avatar
                    size={192}
                    icon={<UserOutlined className="text-center" />}
                    src="/default_avatar.png"
                  />
                </div>
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
          </p> */}
    </div>
  );
};

export default ProfilePage;
