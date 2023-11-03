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
import {
  Pagination,
  EffectFlip,
  EffectCube,
  Autoplay,
  Navigation,
} from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="p-2 flex my-16 bg-white group">
      <div className="w-1\2 lg:w-1/2 py-8 px-6">
        <div className="space-y-10">
          <h5 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary group-hover:tracking-widest ease-linear duration-500">
            We are creative
          </h5>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <p>Best Computer Repair</p>
            <p>
              And <span className="text-primary">IT Solution</span>
            </p>
            <p>Company</p>
          </div>
          <div className="flex gap-10">
            <PrimaryButton href="/about us" title="About Us " size="large" />
            <PrimaryButton href="/service" title="Our Services " size="large" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Swiper
          effect="cube"
          cubeEffect={{
            shadow: true,
            slideShadows: false,
            shadowOffset: 10,
            shadowScale: 0.80,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectCube]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="w-full p-4 h-96">
              <Image
                src={slider1}
                alt="Shoes"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full p-4 h-96">
              <Image
                src={slider2}
                alt="Shoes"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full p-4 h-96">
              <Image
                src={slider3}
                alt="Shoes"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
