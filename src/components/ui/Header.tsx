"use client";
import logo from "../../assests/images/logo.png";
import { MenuItem, getItem } from "@/utils/getMenuItems";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
} from "antd";
import {
  DashboardOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { MenuProps } from "antd";
import { getUserInfo, removeUserInfo } from "@/service/authentication.service";
import { authKey } from "@/constant/keys/authKey";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { useState } from "react";
const { Header: AntHeader } = Layout;

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <div className="flex flex-col gap-1">
          <Button type="text" href="/profile">
            Profile
          </Button>
          <Button onClick={handleLogOut} type="text" danger>
            logout
          </Button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      ),
    },
  ];

  const menuItems: MenuItem[] = [
    getItem(
      <Link href="/home" onClick={() => setOpen(false)}>
        Home
      </Link>,
      "home"
    ),
    getItem(
      <Link href="/service" onClick={() => setOpen(false)}>
        Services
      </Link>,
      "service"
    ),
    getItem(
      <Link href="/about" onClick={() => setOpen(false)}>
        About
      </Link>,
      "about"
    ),
    getItem(
      <Link href="/contact-us" onClick={() => setOpen(false)}>
        Contact us
      </Link>,
      "contact-us"
    ),
    getItem(
      <Link href="/blog" onClick={() => setOpen(false)}>
        Blog
      </Link>,
      "blog"
    ),
    getItem(
      <Link href="/faq" onClick={() => setOpen(false)}>
        FAQ
      </Link>,
      "faq"
    ),
    getItem(
      <Link href="/testimonials" onClick={() => setOpen(false)}>
        Testimonial
      </Link>,
      "testimonial"
    ),
    getItem(
      <Link href="/sign-up" onClick={() => setOpen(false)}>
        Register
      </Link>,
      "sign-up"
    ),
    getItem(
      <Link href="/cart" onClick={() => setOpen(false)}>
        Cart
      </Link>,
      "cart",
      <ShoppingCartOutlined />
    ),
    getItem(
      <Link href="/profile" onClick={() => setOpen(false)}>
        Dashboard
      </Link>,
      "profile",
      <DashboardOutlined />
    ),
  ];
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <AntHeader className="bg-primary h-24 flex justify-between items-center rounded rounded-t-none">
      <div className="text-white hidden md:block">
        <Image
          className="mt-4"
          src={logo}
          width={170}
          height={170}
          alt="logo image"
        />
      </div>
      <div className="w-4/5 mx-auto">
        <Menu
          className="font-semibold font-2xl bg-primary text-white w-full hidden md:block rounded active:text-secondary"
          mode="horizontal"
          items={menuItems}
        />
      </div>
      <div>
        <Button type="primary" className=" md:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          className="bg-primary text-white w-full"
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            className="bg-primary text-white"
            mode="vertical"
            style={{ borderRight: 0 }}
            items={menuItems}
          ></Menu>
        </Drawer>
      </div>
      <div className="md:flex justify-center items-center hidden">
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <div className="flex justify-center items-center">
              <Avatar
                size={40}
                src={loginUser?.profileImage}
                icon={<UserOutlined className="text-center" />}
              />
            </div>
          </Space>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
