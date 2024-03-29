/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { isLogIn } from "@/service/authentication.service";

import { Layout, Row, Space, Spin } from "antd";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLogIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return (
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Space size={"large"} direction="vertical" style={{ width: "100%" }}>
          <Spin tip="Loading" size="large">
            <div className="content " />
          </Spin>
        </Space>
      </Row>
    );
  }

  return (
    <div className="max-w-[1500px] mx-auto bg-white ">
      <Layout hasSider>
        <div className="print:hidden">
          <SideBar />
        </div>
        <Contents>{children}</Contents>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
