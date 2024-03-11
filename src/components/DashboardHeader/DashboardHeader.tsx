"use client";
import { authKey } from "@/constant/keys/authKey";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo, removeUserInfo } from "@/service/authentication.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;
const Header = () => {
  const { role, email } = getUserInfo() as any;
  const { data: loginUser } = useGetSingleUserQuery(email);
  const router = useRouter();
  const handleLogOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button
          style={{ fontWeight: "bold" }}
          onClick={handleLogOut}
          type="text"
          danger
        >
          logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "#fff",
      }}
    >
      <Row
        style={{
          height: "100%",
        }}
        justify={"end"}
        align={"middle"}
      >
        <span className="text-primary mr-2">{loginUser?.name}</span>
        {/* <span className="text-secondary mr-2">{loginUser?.email}</span> */}

        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <div className="flex justify-center items-center bg-primary rounded-full overflow-hidden ring-2 ring-offset-secondary">
              <Avatar
                size={40}
                src={loginUser?.profileImage || "/default_avatar.png"}
                icon={<UserOutlined className="text-center" />}
              />
            </div>
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
