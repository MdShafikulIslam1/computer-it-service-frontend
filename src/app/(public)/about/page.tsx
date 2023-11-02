import Image from "next/image";
import aboutUs from "../../../assests/images/about.jpg";
import { Button, Space } from "antd";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";
const AboutPage = () => {
  return (
    <div className="flex justify-evenly my-24 bg-white">
      <div className="w-full lg:w-1/2  px-8 py-10">
        <Space direction="vertical">
          <h3 className="text-blue-500 font-medium text-4xl">About us ----</h3>
          <h2 className="w-1/2 text-2xl">
            We Team of Experience
            <br />
            <span className="text-blue-600"> IT Specialties</span>
          </h2>
          <p>
            Over 39,000 people work for us in more than 70 countries all This
            breadth of global coverage, combined with specialist.
          </p>
          <div className="flex gap-16 mt-4">
            <div>
              <BsCloudArrowDownFill className="text-center text-orange-500 text-7xl" />
            </div>
            <Space direction="vertical">
              <h1>Cloud Based Services Free Spaces</h1>
              <p className="w-full">
                We understand the importance of approaching each work integrally
                and believe in the power of simple and easy communication.
              </p>
            </Space>
          </div>
          <div className="flex gap-16 mt-4">
            <div>
              <GiTeamIdea className="text-center text-orange-500 text-7xl" />
            </div>
            <Space direction="vertical">
              <h1>Expert Team Member</h1>
              <p className="w-full">
                What separates theme from all other web design agencies is the
                ability to offer the most Friendly Experience you can imagine.
              </p>
            </Space>
          </div>
          <div></div>
        </Space>
      </div>
      <div className="w-4/5 p-4 h-96 lg:w-1/2 relative">
        {!!aboutUs && (
          <Image
            src={aboutUs}
            alt="Shoes"
            className="w-full h-full rounded-lg"
            width={600}
            height={600}
          />
        )}
        <div className="w-36 flex justify-center items-center h-36 rounded-full text-white bg-blue-700 absolute -top-8 -left-8">
          <p className="w-full text-center text-xl font-bold p-4">
            10
            <br />
            Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
