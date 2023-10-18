/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CRISFooter from "@/components/ui/CRISFooter/CRISFooter";
import Header from "@/components/ui/Header";
import { Layout, Row, Space, Spin } from "antd";
const { Footer, Content } = Layout;
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1400px] mx-auto">
      <Layout>
        <Content>
          <Header />
          <div style={{ background: "white" }}>{children}</div>
          <Footer className="bg-slate-600 rounded-xl py-10">
            <CRISFooter/>
             </Footer>
        </Content>
      </Layout>
    </div>
  );
};

export default PublicLayout;
