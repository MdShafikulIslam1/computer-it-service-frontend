// import { authKey } from "@/constant/storageKey";
// import { getUserInfo, removeUserInfo } from "@/service/auth.service";
// import { UserOutlined } from "@ant-design/icons";
// import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
// import type { MenuProps } from "antd";
// import { useRouter } from "next/navigation";
// const { Header: AntHeader } = Layout;
// const Header = () => {
//   const { role } = getUserInfo() as any;
//   const router = useRouter();
//   const handleLogOut = () => {
//     removeUserInfo(authKey);
//     router.push("/login");
//   };
//   const items: MenuProps["items"] = [
//     {
//       key: "0",
//       label: (
//         <Button style={{ fontWeight: "bold" }} onClick={handleLogOut} type="text" danger>
//           logout
//         </Button>
//       ),
//     },
//   ];
//   return (
//     <AntHeader
//       style={{
//         background: "#fff",
//       }}
//     >
//       <Row
//         style={{
//           height: "100%",
//         }}
//         justify={"end"}
//         align={"middle"}
//       >
//         <p>{role}</p>

//         <Dropdown menu={{ items }}>
//           <Space wrap size={16}>
//             <Avatar size="large" icon={<UserOutlined />} />
//           </Space>
//         </Dropdown>
//       </Row>
//     </AntHeader>
//   );
// };

// export default Header;
