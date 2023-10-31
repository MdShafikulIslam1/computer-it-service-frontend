"use client";
import logo from "../../assests/images/logo.png";
import { MenuItem, getItem } from "@/utils/getMenuItems";
import { Avatar, Button, Dropdown, Layout, Menu, Row, Space } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { MenuProps } from "antd";
import {
  getUserInfo,
  isLogIn,
  removeUserInfo,
} from "@/service/authentication.service";
import { authKey } from "@/constant/keys/authKey";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
const { Header: AntHeader } = Layout;

const Header = () => {
  const { role, email } = getUserInfo() as any;
  const { data: loginUser } = useGetSingleUserQuery(email);
  const router = useRouter();
  const handleLogOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: !!role ? (
        <Button style={{ fontWeight: "bold" }} onClick={handleLogOut} type="text" danger>
          logout
        </Button>
      ) : (
        <Link href="/login">Login</Link>
      ),
    },
  ];

  const menuItems: MenuItem[] = [
    getItem(<Link href="/home">Home</Link>, "home", <HomeOutlined />),
    getItem(<Link href="/service">Services</Link>, "service"),
    getItem(<Link href="/about">About</Link>, "about"),
    getItem(<Link href="/contact-us">Contact us</Link>, "contact-us"),
    getItem(<Link href="/blog">Blog</Link>, "blog"),
    getItem(<Link href="/faq">FAQ</Link>, "faq"),
    getItem(<Link href="/sign-up">Register</Link>, "sign-up"),
    getItem(<Link href="/cart">Cart</Link>, "cart", <ShoppingCartOutlined />),
    getItem(
      <Link href="/profile">Dashboard</Link>,
      "profile",
      <DashboardOutlined />
    ),
  ];

  return (
    <AntHeader className="w-full bg-primary h-24 flex  justify-between items-center rounded rounded-t-none">
      <div className="text-white">
        <Image
          className="mt-4"
          src={logo}
          width={170}
          height={170}
          alt="logo image"
        />
      </div>
      <div className="w-3/5 mx-auto">
        <Menu
       
          className="font-semibold font-2xl bg-primary text-white rounded active:text-secondary"
          mode="horizontal"
          items={menuItems}
        />
      </div>

      <div>
        <Row justify={"end"} align={"middle"}>
          <p className="text-black mr-2">{loginUser?.name}</p>

          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              {/* <Avatar size="large" icon={<UserOutlined />} /> */}
              <div className="flex justify-center items-center">
                               <Avatar
                  size={35}               

                  src={loginUser?.profileImage}
                  icon={<UserOutlined className="text-center" />}
                />
              </div>
            </Space>
          </Dropdown>
        </Row>
      </div>
    </AntHeader>
  );
};

export default Header;
