import { MenuItem, getItem } from "@/utils/getMenuItems";
import {
  FileTextOutlined,
  CreditCardOutlined,
  ThunderboltOutlined,
  ScheduleOutlined,
  AppstoreOutlined,
  TableOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
const SideBarItems = (role: string) => {
  const defaultSidebarItems: MenuItem[] = [
    getItem("Profile", "profile", <ProfileOutlined />, [
      getItem(
        <Link href={`/profile`}>Account Profile</Link>,
        `/${role}/profile`
      ),
      getItem(
        <Link href={`/${role}/change-password`}>Change Password</Link>,
        `/${role}/change-password`
      ),
    ]),
  ];
  const commonAdminSidebarItems: MenuItem[] = [
    getItem(
      <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      `/${role}/manage-student`,
      <TableOutlined />
    ),
    getItem(
      <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      `/${role}/manage-faculty`,
      <TableOutlined />
    ),
  ];
  const adminSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    getItem("Management", `/${role}/management`, <AppstoreOutlined />, [
      getItem(
        <Link href={`/${role}/manage-service`}>Service</Link>,
        `/${role}/manage-service`
      ),
      getItem(
        <Link href={`/${role}/manage-category`}>Category</Link>,
        `/${role}/manage-category`
      ),
      getItem(
        <Link href={`/${role}/manage-booking`}>Booking</Link>,
        `/${role}/manage-booking`
      ),
    ]),
  ];

  const superAdminSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
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
      <Link href={`/${role}/courses`}>Courses</Link>,
      `/${role}/courses`,
      <TableOutlined />
    ),
    getItem(
      <Link href={`/${role}/course-schedule`}>Course Schedules</Link>,
      `/${role}/course-schedule`,
      <ScheduleOutlined />
    ),
    getItem(
      <Link href={`/${role}/registration`}>Registration</Link>,
      `/${role}/registration`,
      <ThunderboltOutlined />
    ),
    getItem(
      <Link href={`/${role}/payment`}>Payment</Link>,
      `/${role}/payment`,
      <CreditCardOutlined />
    ),
    getItem(
      <Link href={`/${role}/academic-report`}>Academic Report</Link>,
      `/${role}/academic-report`,
      <FileTextOutlined />
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
