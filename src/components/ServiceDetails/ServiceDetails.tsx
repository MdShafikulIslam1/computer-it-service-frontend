import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { IService } from "@/types/globalType";
import Link from "next/link";
import { Button } from "antd";
interface IProps {
  item: IService;
}
const ServiceDetails = ({ item: service }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  //   const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const reviewData = {
  //       id: id,
  //       data: { reviews: inputValue },
  //     };
  //     createReviews(reviewData);
  //     setInputValue("");
  //   };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleserviceDelete = () => {
    // if (!user) {
    //   return navigate("/auth/login");
    // }
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     deleteservice(data.data._id);
    //     if (deletedData?.data?.success) {
    //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //       navigate("/all-service");
    //     }
    //   }
    // });
  };
  return (
    <div className="my-8">
      <div className="flex items-center gap-10 justify-evenly">
        <div className="w-full p-4 h-96 lg:w-1/2">
          <Image
            src={service?.imageUrl}
            alt="Shoes"
            className="w-full h-full rounded-lg"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="border border-green-700">
            <h2 className="text-3xl font-bold">{service?.name}</h2>
            <p>5 star review</p>
            <p className="font-bold text-[#0F67F6] text-xl">
              $ {service?.fee}{" "}
            </p>
            <p className="font-medium">{service?.description}</p>
            <div className="flex items-center justify-start gap-10 my-2">
              <Link href={`/service/edit`}>
                <Button className="bg-[#7F54B3] text-white btn btn-primary btn-outline">
                  Edit
                </Button>
              </Link>

              <Button
                danger
                onClick={() => handleserviceDelete()}
                className="bg-green-100 btn btn-warning btn-outline"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-8">
        <h1 className="text-3xl font-semibold tracking-widest text-center text-gray-400">
          service Reviews:
        </h1>
        {service?.reviews?.map((review: string) => (
          <li key={service._id} className="text-xl font-medium">
            {review}
          </li>
        ))}
      </div>
      {user && (
        <form
          onSubmit={handleReviewSubmit}
          className="flex w-3/4 gap-10 mt-12 text-center "
        >
          <textarea
            placeholder="Bio"
            className="w-full textarea textarea-bordered textarea-sm "
            onChange={handleChange}
            value={inputValue}
          ></textarea>
          <button
            type="submit"
            className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Post Review
          </button>
        </form>
      )} */}
    </div>
  );
};

export default ServiceDetails;
