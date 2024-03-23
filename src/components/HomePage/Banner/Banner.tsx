import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner-part">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <div className="img1"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]  center">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-xl  font-semibold font-serif ">
                Expert <span className="text-blue-400">Computer </span>Repair
                Services
              </h1>
              <p className="text-center text-white font-semibold pt-3  w-1/2 mx-auto">
                Trust our skilled technicians to resolve all your computer
                issues quickly and efficiently. From hardware repairs to
                software troubleshooting, we&apos;ve got you covered
              </p>
              <div className="text-center mt-3 md:mt-5">
                <Link href="/service">
                  <div className="text-center flex justify-center items-center">
                    <PrimaryButton
                      className="px-5"
                      title="Explore Us"
                      size="large"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img2"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl font-semibold font-popins">
                <span className="text-blue-400">24/7 </span>
                IT Support
              </h1>
              <p className="text-center text-white font-semibold pt-3  w-1/2 mx-auto">
                Get round-the-clock IT assistance whenever you need it. Our team
                is available 24/7 to address your technical challenges and
                ensure smooth operations for your business
              </p>
              <div className="text-center mt-3 md:mt-5">
                <Link href="/service">
                  <div className="text-center flex justify-center items-center">
                    <PrimaryButton
                      className="px-5"
                      title="Explore Us"
                      size="large"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img3"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl font-semibold font-popins">
                Fast and <span className="text-blue-400">Reliable</span> Repair
                Services
              </h1>
              <p className="text-center text-white font-semibold pt-3  w-1/2 mx-auto">
                Experience fast and reliable computer repair services tailored
                to your needs. Our skilled technicians are equipped to handle
                all your computer issues promptly, ensuring minimal downtime for
                your business or personal computing needs
              </p>
              <div className="text-center mt-3 md:mt-5">
                <Link href="/service">
                  <div className="text-center flex justify-center items-center">
                    <PrimaryButton
                      className="px-5"
                      title="Explore Us"
                      size="large"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
