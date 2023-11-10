import { DoubleRightOutlined, HomeFilled, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
interface IProps {
  heading: string;
  currentPageTitle: string;
}
const Overlay = ({ heading, currentPageTitle }: IProps) => {
  return (
    <div className="relative w-full h-80 -mt-2">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/NCqyC6h/bg-pagetitle.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute text-white top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center bg-black bg-opacity-70 p-4">
        <p className=" text-4xl font-bold tracking-widest">{heading}</p>
        <div className="flex items-center justify-center gap-3">
          <Link className="text-white font-medium text-xl hover:text-primary hover:tracking-widest transition-all ease-in-out duration-500" href="/home">
          <HomeFilled className="mt-2 me-1 text-lg"/>  Home
          </Link>
          <span>
            <DoubleRightOutlined className="text-primary mt-2" />
          </span>
          <p className="text-xl">{currentPageTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
