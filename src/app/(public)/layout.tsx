import Header from "@/components/ui/Header";
import { Layout } from "antd";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Layout>
        <Header />
        {children}
      </Layout>
    </div>
  );
};

export default PublicLayout;
