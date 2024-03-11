"use client";
import { Layout } from "antd";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ minHeight: "100vh" }}>
      <div className="print:hidden">
        <DashboardHeader />
      </div>
      <div style={{ margin: "10px" }}>{children}</div>
    </Content>
  );
};

export default Contents;
