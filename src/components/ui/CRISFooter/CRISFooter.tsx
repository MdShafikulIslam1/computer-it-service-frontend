import Image from "next/image";
import logo from "../../../assests/images/logo.png";
import { Button, Space } from "antd";
import {
  EnvironmentTwoTone,
  FacebookFilled,
  MailTwoTone,
  PhoneTwoTone,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const CRISFooter = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-2  text-white py-16 px-20">
        <div className="sm:w-full">
          <div className="-mt-10">
            <Image src={logo} width={170} height={170} alt="logo image" />
          </div>
          <h4 className="w-2/5 -mt-10 hidden md:block">
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
          </h4>
          <div className="mt-8">
            <Space>
              <Button
                style={{ fontWeight: "bold" }}
                href="https://www.facebook.com/profile.php?id=100013695768823"
                shape="circle"
                type="primary"
                icon={<FacebookFilled />}
              />
              <Button
                style={{ fontWeight: "bold" }}
                shape="circle"
                type="primary"
                icon={<TwitterCircleFilled />}
              />
              <Button
                style={{ fontWeight: "bold" }}
                href="https://www.youtube.com/channel/UCQPoKuyEOG6t2WJJHtz74Rg"
                shape="circle"
                type="primary"
                icon={<YoutubeFilled />}
              />
            </Space>
          </div>
        </div>
        <div className="w-full md:w-auto space-y-4 md:space-y-6 mt-4">
          <h2 className="text-base md:text-2xl">Official Info</h2>
          <Space direction="vertical">
            <Space>
              <PhoneTwoTone />{" "}
              <span className="font-semibold">+880 19742 97726</span>
            </Space>
            <Space>
              <MailTwoTone />{" "}
              <span className="font-semibold">179398ssshofik@gmail.com</span>
            </Space>
            <Space>
              <EnvironmentTwoTone />{" "}
              <span className="font-semibold">Gaibandha,Rangpur</span>
            </Space>
          </Space>
        </div>
      </div>
      <p className="text-white text-center w-auto">
        © 2024 <span className="text-secondary font-normal">C R I S</span> –
        Shofikul Islam. All rights reserved.
      </p>
    </>
  );
};

export default CRISFooter;
