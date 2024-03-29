"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FAQPage from "@/components/HomePage/FAQ/FAQ";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import { FloatButton } from "antd";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import TextWithUnderLine from "@/components/Divider/Divider";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import Banner from "@/components/HomePage/Banner/Banner";

const HomePage = () => {
  const { data, isLoading } = useGetAllCategoriesQuery({ limit: 100, page: 1 });
  const categories = data?.categories;
  const { data: reviewAndRatingData, isLoading: loading } =
    useGetAllReviewsQuery({
      limit: 100,
      page: 1,
    });
  <Loading isLoading={loading} />;
  const reviews = reviewAndRatingData?.reviews;

  return (
    <div className="bg-gray-50">
      {/* <HeroSection /> */}
      <Banner />
      {/* <ShortFeature /> */}
      {/* Service page */}
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-primary uppercase tracking-widest font-normal mb-4 text-2xl">
            Latest Services
          </h4>
          <h2 className="font-semibold text-3xl">
            We Are Offering All Kinds of{" "}
            <span className="text-primary font-bold">IT</span> and{" "}
            <span className="text-primary font-bold">Computer</span>{" "}
          </h2>
          <h2 className="font-semibold text-3xl">Solutions Services</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 my-6">
          {categories?.map((category: any, index: number) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
        <div className="text-center mt-6">
          <PrimaryButton
            size="large"
            title="Our All Services"
            type="primary"
            href="/service"
          />
        </div>
      </div>

      <AboutUs />

      <FAQPage />
      <div className="group my-12 hidden md:block rounded py-12 px-4 bg-black text-white">
        <TextWithUnderLine title="Testimonials" />
        <div className="flex flex-col md:flex-row justify-evenly gap-10 my-4">
          <h5 className="w-full md:w-1/2 text-4xl font-semibold">
            What Says Our Happy Clients About us
          </h5>
          <p className="w-auto text-xl font-normal">
            We value the experimentation, the reformation of the message, and
            the smart incentives. We offer a variety of services and solutions
            Worldwide and this is at the heart of how we approach our.
          </p>
        </div>
        <div className="w-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {reviews?.map((review: any, index: number) => (
                <SwiperSlide
                  className="bg-white text-black rounded-xl"
                  key={index}
                >
                  <TestimonialCard review={review} className={`rounded-full`} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <FloatButton.BackTop style={{ color: "blue" }} />
    </div>
  );
};

export default HomePage;
