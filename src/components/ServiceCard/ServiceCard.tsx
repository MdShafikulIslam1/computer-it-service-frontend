import { IService } from "@/types/globalType";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
interface IProps {
  item: IService;
}
const ServiceCard = ({ item }: IProps) => {
  return (
    <div className="relative p-2 m-2 overflow-hidden rounded-lg shadow-xl h-96">
      <div className="flex items-center justify-center h-52">
        <Image
          src={item?.imageUrl}
          alt="service image"
          width={500}
          height={500}
          className="object-center w-full h-full rounded-xl"
          priority
        />
      </div>
      <h2 className="my-2 text-xl font-medium text-center ">{item?.name}</h2>

      <p className="font-medium w-full text-slate-600 text-center">
        {item?.description}
      </p>
      <p className="font-medium">
        Service Fee:
        <span className="ml-2 text-orange-500 text-xl font-bold">
          ${item?.fee}{" "}
        </span>
      </p>

      <Link href={`/service/${item?.id}`}>
        <div className="text-center">
          <Button
            type="primary"
            block
            className="absolute bottom-0 left-0  btn btn-primary btn-outline"
          >
            Read more +
          </Button>
        </div>
      </Link>
     
    </div>
  );
};

export default ServiceCard;
