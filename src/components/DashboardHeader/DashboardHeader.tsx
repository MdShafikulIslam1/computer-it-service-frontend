'use client'
import { authKey } from "@/constant/keys/authKey";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo, removeUserInfo } from "@/service/authentication.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;
const Header = () => {
  const { role ,email} = getUserInfo() as any;
  const {data:loginUser} = useGetSingleUserQuery(email)
  const router = useRouter();
  const handleLogOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={handleLogOut} type="text" danger>
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
        <p className="text-black mr-2">{loginUser?.name}</p>

        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
          <div className="flex justify-center items-center">
                               <Avatar                  size={35}               

                  src={loginUser?.profileImage}
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
