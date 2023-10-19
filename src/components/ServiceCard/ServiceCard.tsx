import { IService } from "@/types/globalType";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
interface IProps {
  item: IService;
}
const ServiceCard = ({ item }: IProps) => {
  return (
    <Tilt>
      <div className="relative p-2 m-2 overflow-hidden rounded-lg shadow-2xl w-80 h-96">
        <div className="flex items-center justify-center h-52">
          <Image
            src={item?.imageUrl}
            alt="service image"
            width={500}
            height={500}
            className="object-center w-full h-full rounded-xl"
          />
        </div>
        <h2 className="my-1 text-xl font-medium text-center ">{item?.name}</h2>

        <p className="font-normal w-full text-slate-600">
          {item?.description?.length > 40
            ? `${item?.description?.substring(0, 40)}....`
            : `${item?.description}`}
        </p>
        <p className="font-normal mt-1">
          Service Fee:
          <span className="ml-2 text-orange-500 text-lg font-medium">
            ${item?.fee}{" "}
          </span>
        </p>
        <p className="font-normal mt-1">
          Estimate time:
          <span className="ml-2 text-lg font-normal">
            {item?.durationInMinutes + ""}
          </span>
          <span className="text-md font-light"> minutes</span>
        </p>

        <Link href={`/service/${item?.id}`}>
          <div className="text-center">
            <Button
              style={{ fontWeight: "bold" }}
              type="primary"
              block
              className="absolute bottom-0 left-0  btn btn-primary btn-outline"
            >
              Read more +
            </Button>
          </div>
        </Link>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
