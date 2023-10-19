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
      <div className="w-full flex justify-center items-start gap-2  text-white py-16 px-20">
        <div>
          <div className="-mt-10">
            <Image src={logo} width={170} height={170} alt="logo image" />
          </div>
          <h4 className="w-2/5 text-gray-100 -mt-10">
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
          </h4>
          <div className="mt-8">
            <Space>
              <Button style={{ fontWeight: "bold" }}
                href="https://www.facebook.com/profile.php?id=100013695768823"
                shape="circle"
                type="primary"
                icon={<FacebookFilled />}
              />
              <Button style={{ fontWeight: "bold" }}
                shape="circle"
                type="primary"
                icon={<TwitterCircleFilled />}
              />
              <Button style={{ fontWeight: "bold" }}
                href="https://www.youtube.com/channel/UCQPoKuyEOG6t2WJJHtz74Rg"
                shape="circle"
                type="primary"
                icon={<YoutubeFilled />}
              />
            </Space>
          </div>
        </div>
        <div className="space-y-4">
          <h2>Official Info</h2>
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
      <h1 className="text-white text-center">
        © 2023 <span className="text-blue-400 font-normal">C R I S</span> –
        CaseThemes. All rights reserved.
      </h1>
    </>
  );
};

export default CRISFooter;
