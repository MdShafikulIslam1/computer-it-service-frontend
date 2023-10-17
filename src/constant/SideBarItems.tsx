import { MenuItem, getItem } from "@/utils/getMenuItems";
import {
  AppstoreOutlined,
  TableOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
const SideBarItems = (role: string) => {
  const defaultSidebarItems: MenuItem[] = [
    getItem(<Link href="/home">Home</Link>, "home", <HomeOutlined />),
    getItem("Profile", "profile", <ProfileOutlined />, [
      getItem(
        <Link href={`/profile`}>Account Profile</Link>,
        `/${role}/profile`
      ),
      // getItem(
      //   <Link href={`/${role}/change-password`}>Change Password</Link>,
      //   `/${role}/change-password`
      // ),
    ]),
  ];
  // const commonAdminSidebarItems: MenuItem[] = [
  //   getItem(
  //     <Link href={`/${role}/manage-student`}>Manage Students</Link>,
  //     `/${role}/manage-student`,
  //     <TableOutlined />
  //   ),
  //   getItem(
  //     <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
  //     `/${role}/manage-faculty`,
  //     <TableOutlined />
  //   ),
  // ];
  const adminSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,

    getItem(
      <Link href={`/${role}/manage-service`}>Manage Services</Link>,
      `/${role}/manage-service`,
      <AppstoreOutlined />
    ),
    getItem(
      <Link href={`/${role}/manage-category`}>Manage Category</Link>,
      `/${role}/manage-category`,
      <AppstoreOutlined />
    ),
    getItem(
      <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
      `/${role}/manage-booking`,
      <AppstoreOutlined />
    ),
  ];

  const superAdminSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    getItem(
      <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      `/${role}/admin`,
      <TableOutlined />
    ),
    getItem(
      <Link href={`/${role}/manage-user`}>Manage User</Link>,
      `/${role}/manage-user`,
      <TableOutlined />
    ),
  ];

  const userSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    getItem(
      <Link href="/my-booking">My Bookings</Link>,
      "my-booking",
      <TableOutlined />
    ),
    getItem(
      <Link href="/cart">Cart Items</Link>,
      "cart",
      <ShoppingCartOutlined />
    ),
  ];
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};

export default SideBarItems;
