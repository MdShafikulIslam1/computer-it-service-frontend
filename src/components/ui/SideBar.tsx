"use client";
import { useState } from "react";
import SideBarItems from "@/constant/SideBarItems";
import { getUserInfo } from "@/service/authentication.service";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;
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
        <span className="w-full text-xs text-secondary">Computer Repair And IT Service</span>
      </div>
      <Menu
      className="bg-primary text-white"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SideBarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
