import { IService } from "@/types/globalType";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
// import Tilt from "react-parallax-tilt";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { RightCircleFilled } from "@ant-design/icons";
interface IProps {
  item: IService;
}
const ServiceCard = ({ item }: IProps) => {
  return (
    <div className="relative p-1 my-4 overflow-hidden rounded-lg w-full md:w-96 h-96 shadow-xl hover:shadow transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-center h-44">
        {item?.imageUrl && (
          <Image
            src={item?.imageUrl}
            alt="service image"
            width={500}
            height={500}
            className="object-center w-full h-full rounded-xl"
          />
        )}
      </div>
      <div className="px-2">
        <h2 className="my-2 text-xl font-medium text-center ">{item?.name}</h2>
        <p className="font-normal w-full">
          {item?.description?.length > 70
            ? `${item?.description?.substring(0, 70)}....`
            : `${item?.description}`}
        </p>
        <p className="font-medium">
          Estimate time:
          <span className="ml-2 text-secondary text-lg font-normal">
            {item?.durationInMinutes + ""}
          </span>
          <span className="text-md font-light"> minutes</span>
        </p>
        <div className="flex justify-between items-center ">
          <p className="font-medium">
            Service Fee:
            <span className="ml-2 text-primary text-lg font-semibold">
              ${item?.fee}
            </span>
          </p>
          <p className="font-medium">
            Warranty:
            <span className="ml-2 text-primary text-md font-semibold">
              {item?.warranty}
            </span>
            <span className="text-md font-light"> months</span>
          </p>
        </div>
      </div>

      <Link href={`/service/${item?.id}`}>
        <div className="text-center">
          <PrimaryButton
            className="absolute bottom-0 left-0"
            title="Read more"
            icon={<RightCircleFilled />}
            isBlock={true}
            size="middle"
          />
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
