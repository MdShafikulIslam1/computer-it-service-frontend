/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CRISFooter from "@/components/ui/CRISFooter/CRISFooter";
import Header from "@/components/ui/Header";
import { Layout } from "antd";
const { Footer, Content } = Layout;
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Layout>
        <Content className="bg-white">
          <Header />
          <div style={{ background: "white" }}>{children}</div>
          <Footer className="bg-primary rounded-xl py-10">
            <CRISFooter />
          </Footer>
        </Content>
      </Layout>
    </div>
  );
};

export default PublicLayout;
