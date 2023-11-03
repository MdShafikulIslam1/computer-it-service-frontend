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
    <div className="relative p-2 m-2 overflow-hidden rounded-lg  w-72 h-96 shadow-xl hover:shadow-primary transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-center h-44">
       {item?.imageUrl && <Image
          src={item?.imageUrl}
          alt="service image"
          width={500}
          height={500}
          className="object-center w-full h-full rounded-xl"
        />}
      </div>
      <h2 className="my-1 text-xl font-medium text-center ">{item?.name}</h2>

      <p className="font-normal w-full">
        {item?.description?.length > 70
          ? `${item?.description?.substring(0, 70)}....`
          : `${item?.description}`}
      </p>
      <p className="font-normal">
        Service Fee:
        <span className="ml-2 text-primary text-lg font-semibold">
          ${item?.fee}
        </span>
      </p>
      <p className="font-normal">
        Estimate time:
        <span className="ml-2 text-secondary text-lg font-normal">
          {item?.durationInMinutes + ""}
        </span>
        <span className="text-md font-light"> minutes</span>
      </p>

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
