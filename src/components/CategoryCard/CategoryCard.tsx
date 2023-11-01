import Link from "next/link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Image from "next/image";

const CategoryCard = ({category}:any) => {
  return (
    <div className="mt-12">
      <div className="relative p-2  rounded-lg  w-96 h-72 shadow-lg hover:text-white hover:bg-primary  hover:shadow-primary transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center h-24 rounded-full relative ">
          <Image
            src={category?.logo}
            alt="service image"
            width={140}
            height={140}
            className="object-center absolute -top-2/3 rounded-full "
          />
        </div>
        <h2 className="my-1 text-xl font-medium text-center ">
          {category?.title}
        </h2>

        <p className="font-normal w-full text-center p-4">
          {category?.description}
        </p>
        <Link href={`/service`}>
          <div className="text-center flex justify-center items-center">
            <PrimaryButton
              className="absolute bottom-1"
              title="Read more"
              size="large"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
