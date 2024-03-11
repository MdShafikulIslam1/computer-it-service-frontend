import { useState } from "react";
import Image from "next/image";
import { ICart, IReviewData, IService } from "@/types/globalType";
import { Button, Col, Row, message, Rate, Avatar, Empty, Space } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import Form from "../Form/Form";
import { SubmitHandler } from "react-hook-form";
import FormTextArea from "../Form/FormTextArea";
import {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
} from "@/redux/api/reviewApi";
import { getUserInfo } from "@/service/authentication.service";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { decrement, increment } from "@/redux/feature/counter/counterSlice";
import { useCreateCartMutation } from "@/redux/api/cartApi";
import dayjs from "dayjs";
import Loading from "../LoadingComponent/LoadingComponent";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
interface IProps {
  item: IService;
}

const ServiceDetails = ({ item: service }: IProps) => {
  const [value, setValue] = useState<number>(0);
  const count = useAppSelector((state) => state?.counter?.count);
  const dispatch = useAppDispatch();
  const { email } = getUserInfo() as any;
  const { data } = useGetSingleUserQuery(email);
  const { data: reviewAndRatingData, isLoading } = useGetAllReviewsQuery({
    limit: 100,
    page: 1,
    serviceId: service?.id,
  });
  <Loading isLoading={isLoading} />;
  const reviews = reviewAndRatingData?.reviews;
  const [createReview] = useCreateReviewMutation();
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    if (!email) {
      return message.error("Login First to leave your comment");
    }
    const reviewData: IReviewData = {
      userId: data?.id,
      serviceId: service?.id!,
      rating: value,
      comments: values.comments,
    };
    message.loading("Posting ....");

    try {
      const res = await createReview(reviewData).unwrap();
      if (res?.id) {
        message.success("your review is done");
        setValue(0);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  // add to cart handler
  const [createCart] = useCreateCartMutation();
  const handleAddToCart = async () => {
    const cartData: ICart = {
      userId: data?.id,
      serviceId: service?.id!,
      quantity: count || 1,
      price: Number(service.fee) * count,
    };
    try {
      if (!email) {
        return message.error("Login First to add to card service");
      }
      const res = await createCart(cartData).unwrap();
      if (res?.id) {
        message.success(
          `${cartData.quantity} x ${service.name} has been added your cart`
        );
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div className="my-8  bg-white">
      {/* service details start */}
      <div className="flex flex-col md:flex-row gap-10 justify-evenly">
        <div className="w-full p-4 h-96 md:w-1/2">
          {service?.imageUrl && (
            <Image
              src={service?.imageUrl}
              alt="Shoes"
              className="w-full h-full rounded-lg bg-green-500"
              width={600}
              height={600}
            />
          )}
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="border border-green-700 space-y-2">
            <h2 className="text-3xl font-bold">{service?.name}</h2>
            {/* TODO:REVIEW dynamically  */}
            <p>5 star (1 user review)</p>
            <p className="font-bold text-[#0F67F6] text-xl">
              $ {service?.fee}{" "}
            </p>
            {/* @ts-ignore */}
            <p>Category:{service?.category?.title}</p>
            {service?.warranty && (
              <p className="font-bold">
                warranty: <span className="font-medium">{service?.warranty} months</span>{" "}
              </p>
            )}
            <p className="font-bold">
              Repair Time : <span className="font-medium">{service?.durationInMinutes} Minutes</span>{" "}
            </p>
            <p className="font-medium w-4/5 mb-8">{service?.description}</p>
            <div className="flex mt-16 gap-4 items-center">
              <div className="flex gap-3 bg-gray-100 border py-1 rounded justify-center items-center">
                <Button
                  style={{ fontWeight: "bold" }}
                  onClick={() => dispatch(decrement())}
          
                >
                  -
                </Button>
                <h1 className="text-center">{count}</h1>
                <Button
                  style={{ fontWeight: "bold" }}
                  onClick={() => dispatch(increment())}
                >
                  +
                </Button>
              </div>
              <Button
                style={{ fontWeight: "bold" }}
                onClick={() => handleAddToCart()}
                type="primary"
                className="text-white"
              >
                <ShoppingCartOutlined className="text-white" /> Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* service details end */}

      <div className="grid gap-8 grid-cols-12 mt-12 items-start">
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-1 gap-6 my-2 md:my-4 lg:my-8">
            {reviews?.map((review: any, index: number) => (
              <TestimonialCard key={index} review={review} />
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 shadow-xl h-full md:min-h-screen my-2 md:my-4 lg:my-8">
          <div>
            <Form submitHandler={onSubmit}>
              <div
                style={{
                  padding: "0px 15px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                  className="text-xl w-full text-center lg:text-2xl mt-4 text-primary font-medium"
                >
                  Your Review Information
                </p>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col
                    className="gutter-row"
                    span={24}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div className="my-2">
                      <p className="text-lg my-1">
                        Your review <span className="text-red-500">*</span>{" "}
                      </p>
                      <span>
                        <Rate
                          tooltips={desc}
                          onChange={setValue}
                          value={value}
                        />
                        {value ? (
                          <span className="ant-rate-text">
                            {desc[value - 1]}
                          </span>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <div>
                      <FormTextArea
                        name="comments"
                        label="Your review"
                        placeHolder="write your comment"
                        required={true}
                      />
                    </div>
                  </Col>
                </Row>
                <Button
                  style={{ fontWeight: "bold" }}
                  htmlType="submit"
                  type="primary"
                >
                  Comment
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
