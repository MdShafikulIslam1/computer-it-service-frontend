/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import PublicHeader from "@/components/PublicHeader/PublicHeader";
import CRISFooter from "@/components/ui/CRISFooter/CRISFooter";
import Header from "@/components/ui/Header";
import { Layout } from "antd";
const { Footer, Content } = Layout;
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Layout>
        <Content className="bg-white">
          <div className="block md:hidden">
            <Header />
          </div>
          <div className="hidden md:block">
            <PublicHeader />
          </div>
          <div style={{ background: "white" }}>{children}</div>
          <Footer className="bg-secondary rounded-xl py-10">
            <CRISFooter />
          </Footer>
        </Content>
      </Layout>
    </div>
  );
};

export default PublicLayout;
