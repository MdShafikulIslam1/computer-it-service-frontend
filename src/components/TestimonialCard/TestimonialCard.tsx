import { Rate } from "antd";
import Image from "next/image";
import icon from '../../assests/images/testimonial_icon.png'


const TestimonialCard = ({review}:any) => {
    return (
        <div
            className="flex flex-col gap-4  shadow-xl hover:shadow-2xl hover:bg-primary hover:text-white w-auto h-64 rounded p-10 transition-all ease-linear duration-1000"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <div className=" w-24 h-24">
                  {!!review?.user?.profileImage && (
                    <Image
                      src={review?.user?.profileImage}
                      height={80}
                      width={80}
                      alt="profile image"
                      className="object-center rounded-full border-4  border-secondary"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-semibold">{review?.user?.name}</p>
                  <Rate disabled value={review?.rating} />
                </div>
              </div>
              <div>
               <Image src={icon} alt="testimonial icon" objectFit="center" width={40} height={40}/>
              </div>
            </div>
            <div className="">
              <p className="">{review?.comments} </p>
            </div>
          </div>
    );
};

export default TestimonialCard;