import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div id="banner-part">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <div className="img1"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]  center">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl  font-semibold font-popins ">
                Grow your <span className="text-blue-400">music skills </span>{" "}
                with <br /> Music Hunt Academy
              </h1>
              <p className="text-center text-white font-semibold pt-3 font-popins">
                Music is everybody’s possession. It’s only publishers <br /> who
                think that people own it.
              </p>
              <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">
                  Explore Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img2"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl font-semibold font-popins">
                Grow your <span className="text-blue-400">music skills </span>{" "}
                with <br /> Music Hunt Academy
              </h1>
              <p className="text-center text-white font-semibold pt-3 font-popins">
                Music is everybody’s possession. It’s only publishers <br /> who
                think that people own it.
              </p>
              <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">
                  Explore Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img3"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl font-semibold font-popins">
                Grow your <span className="text-blue-400">music skills </span>{" "}
                with <br /> Music Hunt Academy
              </h1>
              <p className="text-center text-white font-semibold pt-3 font-popins">
                Music is everybody’s possession. It’s only publishers <br /> who
                think that people own it.
              </p>
              <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">
                  Explore Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img4"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl font-semibold font-popins">
                Grow your <span className="text-blue-400">music skills </span>{" "}
                with <br /> Music Hunt Academy
              </h1>
              <p className="text-center text-white font-semibold pt-3 font-popins">
                Music is everybody’s possession. It’s only publishers <br /> who
                think that people own it.
              </p>
              <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">
                  Explore Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img5"></div>
          <div className="max-w-screen-xl mx-auto">
            <div className="overlay absolute pt-[250px]">
              <h1 className="text-center pt-20 text-white lg:text-5xl md:text-3xl sm:text-1xl font-semibold font-popins">
                Grow your <span className="text-blue-400">music skills </span>{" "}
                with <br /> Music Hunt Academy
              </h1>
              <p className="text-center text-white font-semibold pt-3 font-popins">
                Music is everybody’s possession. It’s only publishers <br /> who
                think that people own it.
              </p>
              <div className="text-center mt-3">
                <button className="btn font-bold text-white btn-primary hover:bg-blue-600 ">
                  Explore Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
