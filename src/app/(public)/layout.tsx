/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Header from "@/components/ui/Header";
import { Layout, Row, Space, Spin } from "antd";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1400px] mx-auto">
      <Layout>
        <Header />
        <div style={{ background: "white" }}>{children}</div>
      </Layout>
    </div>
  );
};

export default PublicLayout;
