"use client";
import {
  DownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  MenuProps,
  Row,
  Space,
  Spin,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../assests/images/logo.png";
import { isLogIn, removeUserInfo } from "@/service/authentication.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constant/keys/authKey";

const PublicHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const userLoggedIn = isLogIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log("user logged in", userLoggedIn);

  // const menuItems = [
  //   {
  //     id: 1,
  //     label: (
  //       <Link className="text-white tracking-wider" href={"/"}>
  //         Home
  //       </Link>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     label: (
  //       <Link className="text-white tracking-wider" href={"/service"}>
  //         Services
  //       </Link>
  //     ),
  //   },
  //   {
  //     id: 3,
  //     label: (
  //       <Link className="text-white tracking-wider" href={"/about"}>
  //         About
  //       </Link>
  //     ),
  //   },
  //   {
  //     id: 4,
  //     labe: (
  //       <Link className="text-white tracking-wider" href={"/contact-us"}>
  //         Contact us
  //       </Link>
  //     ),
  //   },
  //   {
  //     id: 5,
  //     label: (
  //       <Link className="text-white" href={"/cart"}>
  //         <Badge className="text-white" count={5}>
  //           <Avatar
  //             icon={<ShoppingCartOutlined />}
  //             shape="circle"
  //             size="default"
  //           />
  //         </Badge>
  //       </Link>
  //     ),
  //   },
  // ];

  const handleLogOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <>
          {userLoggedIn ? (
            <div className="flex flex-col gap-1">
              <Button type="text" href="/profile">
                Profile
              </Button>
              <Button onClick={handleLogOut} type="text">
                logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <Button type="text" href={"/login"}>
                Login
              </Button>
              <Button type="text" href={"/register"}>
                Register
              </Button>
            </div>
          )}
        </>
      ),
    },
  ];
  return (
    <div className="bg-secondary text-white h-20 flex items-center">
      <div className="text-white hidden md:block justify-center items-center">
        <Image
          className="ml-10 lg:ml-16 text-white object-contain"
          src={logo}
          width={120}
          height={120}
          alt="logo image"
        />
      </div>
      <div className=" flex-1 gap-2 md:gap-4 lg:gap-6 flex items-center justify-center ">
        <div className="sr-only">
          <Input
            className=" text-white"
            addonBefore={<SearchOutlined className="text-gray-200" />}
            type="text"
            size="large"
            placeholder="Search your service..."
            onChange={(e: any) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-6 md:gap-10 lg:gap-12">
          <ul className="flex md:gap-8 lg:gap-12 font-semibold items-center">
            <Link
              className="text-white hover:text-primary hover:tracking-wide"
              href={"/home"}
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-primary hover:tracking-wide"
              href={"/service"}
            >
              Services
            </Link>
            <Link
              className="text-white hover:text-primary hover:tracking-wide"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="text-white hover:text-primary hover:tracking-wide"
              href={"/contact-us"}
            >
              Contact Us
            </Link>
            <Link className="text-white group" href={"/cart"}>
              <Badge className="text-white ">
                <Avatar
                  icon={<ShoppingCartOutlined />}
                  shape="circle"
                  size="default"
                  className="group-hover:text-primary group-hover:scale-150]"
                />
                {/* <span className="ml-1 group-hover:text-primary group-hover:tracking-wide"> Cart</span> */}
              </Badge>
            </Link>
            <div className="group">
              <Dropdown
                menu={{ items, selectable: true }}
                placement="bottomRight"
                arrow
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <p className="text-white group-hover:text-primary group-hover:tracking-wide">
                      {" "}
                      My Account
                    </p>
                    <DownOutlined className="text-white group-hover:rotate-180 transition-all duration-1000 ease-in" />
                    <Avatar
                      size={40}
                      src={"/default_avatar.png"}
                      icon={<UserOutlined className="text-center" />}
                    />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicHeader;
