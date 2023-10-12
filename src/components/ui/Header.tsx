"use client";
import { MenuItem, getItem } from "@/utils/getMenuItems";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
  message,
} from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import type { MenuProps } from "antd";
const { Header: AntHeader } = Layout;
const menuItems: MenuItem[] = [
  getItem(<Link href="/home">Home</Link>, "home", <HomeOutlined />),
  getItem(<Link href="/about">About</Link>, "about"),
  getItem(<Link href="/contact-us">Contact us</Link>, "contact-us"),
  getItem(<Link href="/blog">Blog</Link>, "blog"),
  getItem(<Link href="/faq">FAQ</Link>, "faq"),
  getItem(<Link href="/sign-up">Register</Link>, "sign-up"),
];

const Header = () => {
  const handleLogOut = () => {
    console.log(message.error("pore implement korbo"));
  };
  const isLoggedIn = false;
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: isLoggedIn ? (
        <Button onClick={handleLogOut} type="text" danger>
          logout
        </Button>
      ) : (
        <Link href="/login">Login</Link>
      ),
    },
  ];
  return (
    <AntHeader className="bg-white">
      <Row className="w-full h-full" justify={"space-evenly"} align={"middle"}>
        <Col span={6}>CIMS</Col>
        <Col span={8}>
          <Menu
            className="bg-white"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={menuItems}
          />
        </Col>
        <Col span={8}>
          <div className="flex justify-end items-center">
            <Dropdown menu={{ items }}>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
