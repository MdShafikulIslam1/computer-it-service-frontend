"use client";
import { useState } from "react";
import SideBarItems from "@/constant/SideBarItems";
import { getUserInfo } from "@/service/authentication.service";
import { Avatar, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useGetSingleUserQuery } from "@/redux/api/userApi";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role, email } = getUserInfo() as any;
  const { data: loginUser } = useGetSingleUserQuery(email);
  return (
    <Sider
      className="bg-primary "
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <div
        className={`${collapsed ? "hidden mt-96" : "block"}`}
        style={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        <p className="text-white text-md mt-4 -mb-4 md:tracking-widest">
          C R I S
        </p>
        <span className="w-full text-xs text-secondary">
          Computer Repair And IT Service
        </span>
      </div>
      <Menu
        className="bg-primary text-white"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SideBarItems(role)}
      />
      <div
        className={`absolute bottom-[60px] left-6 z-50 ${
          collapsed ? "hidden" : "block"
        } `}
      >
        <div className="flex gap-3 justify-center items-center rounded-full overflow-hidden ">
          <Avatar
            size={35}
            src={loginUser?.profileImage || "/default_avatar.png"}
            icon={<UserOutlined className="text-center" />}
          />
          <p>{loginUser?.email}</p>
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
