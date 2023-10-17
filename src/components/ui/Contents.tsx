"use client";
import { Layout, Breadcrumb } from "antd";
import UMBreadCrumb from "../ui copy/UMBreadCrumb";
import Header from "./Header";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh" }}>
     <DashboardHeader/>
      {/* <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "student",
            link: `/${base}/student`,
          },
        ]}
      /> */}
      <div style={{ margin: "10px" }}>{children}</div>
    </Content>
  );
};

export default Contents;
