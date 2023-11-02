"use client";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import Overlay from "@/components/Overlay/Overlay";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";

const TestimonialPage = () => {
  const { data: reviewAndRatingData, isLoading } = useGetAllReviewsQuery({
    limit: 100,
    page: 1,
  });
  <Loading isLoading={isLoading} />;
  const reviews = reviewAndRatingData?.reviews;

  return (
    <>
      <Overlay heading="Testimonials" currentPageTitle="testimonial" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4 md:my-8 lg:my-16">
        {reviews?.map((review: any, index: number) => (
          <TestimonialCard key={index} review={review} />
        ))}
      </div>

    </>
  );
};

export default TestimonialPage;
