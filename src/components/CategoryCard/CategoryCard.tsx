import Link from "next/link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Image from "next/image";

const CategoryCard = ({ category }: any) => {
  return (
    <div className="mt-16 md:mt-18">
      <div className="relative p-2 rounded-lg  w-96 h-72 shadow-lg hover:border hover:border-primary hover:scale-105  transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center h-24 rounded-full relative ">
          {!!category?.logo && (
            <Image
              src={category?.logo}
              alt="service image"
              width={65}
              height={65}
              className="object-center rounded "
            />
          )}
        </div>
        <h2 className="my-1 text-xl font-medium text-center ">
          {category?.title}
        </h2>

        <p className="font-normal w-full text-center p-4">
          {category?.description}
        </p>
        <Link href={`/category-services/${category?.id}`}>
          <div className="text-center flex justify-center items-center">
            <PrimaryButton
              className="absolute bottom-1 mb-2"
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
