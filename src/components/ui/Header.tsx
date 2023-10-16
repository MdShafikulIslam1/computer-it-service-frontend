"use client";
import logo from "../../assests/images/logo.png";
import { MenuItem, getItem } from "@/utils/getMenuItems";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
} from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
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
const { Header: AntHeader } = Layout;

const Header = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const handleLogOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: !!role ? (
        <Button onClick={handleLogOut} type="text" danger>
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
    getItem(<Link href="/cart">Cart</Link>, "cart"),
  ];

  return (
    <AntHeader className="w-full bg-white h-24 flex justify-between items-center">
      <div>
        <Image
          className="mt-4"
          src={logo}
          width={170}
          height={170}
          alt="logo image"
          objectFit="contain"
        />
      </div>
      <div>
        <Menu
          className="bg-gray-50 w-full"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          items={menuItems}
        />
      </div>

      <div>
        <Row justify={"end"} align={"middle"}>
          <p>{role}</p>

          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </Row>
      </div>
    </AntHeader>
  );
};

export default Header;
