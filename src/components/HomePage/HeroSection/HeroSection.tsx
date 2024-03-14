import { Button, Carousel, Col, Row } from "antd";
import Image from "next/image";
import slider1 from "../../../assests/images/slider1.jpg";
import slider2 from "../../../assests/images/slider2.jpg";
import slider3 from "../../../assests/images/slider3.jpg";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { EffectCube, Autoplay } from "swiper/modules";
import Link from "next/link";
import PublicHeader from "@/components/PublicHeader/PublicHeader";
import banner from "../../../../public/banner.png";


const HeroSection = () => {
  return (
    // <div className="p-2 flex flex-col md:flex-row lg:flex-row my-16 bg-white group">
    //   {/* info div */}
    //   <div className="w-full md:w-1/2 lg:w-1/2 py-8 px-6">
    //     <div className="space-y-2 md:space-y-4 lg:space-y-10">
    //       <h5 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary group-hover:tracking-widest ease-linear duration-500">
    //         We are creative
    //       </h5>
    //       <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
    //         <p>Best Computer Repair</p>
    //         <p>
    //           And <span className="text-primary">IT Solution</span>
    //         </p>
    //         <p>Company</p>
    //       </div>
    //       <div className="flex gap-10 ">
    //         <PrimaryButton href="/about us" title="About Us " size="large" className="my-8" />
    //         <PrimaryButton href="/service" title="Our Services " size="large" className="my-8" />
    //       </div>
    //     </div>
    //   </div>
    //   {/* slider div */}
    //   <div className="w-full md:w-1/2 lg:1/2">
    //     <Swiper
    //       effect="cube"
    //       cubeEffect={{
    //         shadow: true,
    //         slideShadows: false,
    //         shadowOffset: 10,
    //         shadowScale: 0.8,
    //       }}
    //       autoplay={{
    //         delay: 2000,
    //         disableOnInteraction: false,
    //       }}
    //       loop={true}
    //       modules={[Autoplay, EffectCube]}
    //       className="mySwiper "
    //     >
    //       <SwiperSlide>
    //         <div className="w-full p-4 h-96">
    //           <Image
    //             src={slider1}
    //             alt="Shoes"
    //             className="w-full h-full rounded-lg"
    //             width={600}
    //             height={600}
    //           />
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="w-full p-4 h-96">
    //           <Image
    //             src={slider2}
    //             alt="Shoes"
    //             className="w-full h-full rounded-lg"
    //             width={600}
    //             height={600}
    //           />
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="w-full p-4 h-96">
    //           <Image
    //             src={slider3}
    //             alt="Shoes"
    //             className="w-full h-full rounded-lg"
    //             width={600}
    //             height={600}
    //           />
    //         </div>
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>
    // </div>
    <>
      {/* <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden -mt-2">
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
            fill
          />
          <div className="absolute inset-0 bg-black opacity-45"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Receive Instant Service !
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We offer repair many different type of devices including computer
            ,laptop and IT service
          </p>
          <div className="flex gap-2 md:gap-4">
            <Link
              href="/service"
              className="bg-primary text-white hover:bg-secondary py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className="bg-secondary text-white hover:bg-primary py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}

      
    </>
  );
};

export default HeroSection;
