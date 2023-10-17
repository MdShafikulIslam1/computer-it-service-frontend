"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import UMTable from "@/components/Table/UMTable";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { useGetAllCartsQuery } from "@/redux/api/cartApi";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/service/authentication.service";
import { Button, Col, Row, Space, Spin, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const CheckOutPage = () => {
  const { email } = getUserInfo() as any;
  const { data: currentUserData } = useGetSingleUserQuery(email);
  const { data: cartData, isLoading } = useGetAllCartsQuery({
    limit: 100,
    page: 1,
    userId: currentUserData?.id,
  });
  const carts = cartData?.carts;
  const totalPrice = carts?.reduce(
    (total: number, item: Record<string, any>) => total + item?.price,
    0
  );
  const router = useRouter();
  const [createBooking] = useCreateBookingMutation();
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    if (isLoading) {
      return (
        <Row
          justify={"center"}
          align={"middle"}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Space size={"large"} direction="vertical" style={{ width: "100%" }}>
            <Spin tip="Loading" size="large">
              <div className="content " />
            </Spin>
          </Space>
        </Row>
      );
    }
    const bookingData = {
      userId: currentUserData.id,
      address: values?.address,
      emergencyContactNo: values?.emergencyContactNo,
      additionalInfo: values?.additionalInfo,
      price: totalPrice,
      bookingItems: carts?.map((cart: any) => {
        return {
          cartId: cart?.id,
          serviceId: cart?.service?.id,
          quantity: cart?.quantity,
        };
      }),
    };
    if (bookingData?.bookingItems?.length < 1) {
      return message.error("Add at least one booking item in your cart");
    }
    message.loading("Creating ....");
    try {
      const res = await createBooking(bookingData).unwrap();
      if (res?.id) {
        message.success("Your booking has been taken successfully");
        // router.push("/admin/manage-category");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const defaultValues = {
    name: currentUserData?.name || "",
    address: currentUserData?.address || "",
    contactNo: currentUserData?.contactNo || "",
    emergencyContactNo: currentUserData?.emergencyContactNo || "",
    email: email || "",
  };

  const columns = [
    {
      title: "Service Name",
      dataIndex: "service",
      key: "service",
      render: function (data: any) {
        return data && data.name;
      },
    },
    {
      title: "Price($)",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <div>
      <Row>
        <Col span={14}>
          <div>
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
              <div
                style={{
                  margin: "10px",
                  padding: "15px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  Billing Information:
                </p>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {/*full name */}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormInput
                        type="text"
                        name="name"
                        label="Full name"
                        placeHolder="Your full name"
                        required={true}
                        disabled={true}
                      />
                    </div>
                  </Col>
                  {/*location*/}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormInput
                        type="text"
                        name="address"
                        label="Town/city"
                        placeHolder="Enter your location"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/*Email*/}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        placeHolder="Enter your Email"
                        required={true}
                        disabled={true}
                      />
                    </div>
                  </Col>
                  {/*PhoneNumber*/}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormInput
                        type="text"
                        name="contactNo"
                        label="Phone Number"
                        placeHolder="Enter your contactNo"
                        required={true}
                        disabled={true}
                      />
                    </div>
                  </Col>
                  {/*Alternative number*/}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormInput
                        type="text"
                        name="emergencyContactNo"
                        label="Alternative phone number"
                        placeHolder="your emergency contactNo"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/*Additional information*/}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormTextArea
                        name="additionalInfo"
                        label="Additional Information"
                        placeHolder="Note about your order,e.g. special notes for delivery"
                      />
                    </div>
                  </Col>
                </Row>
                <Button htmlType="submit" type="primary">
                  Place order
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col span={10}>
          <div
            style={{
              margin: "10px",
              padding: "15px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              Your order
            </p>
            <hr />
            <UMTable
              columns={columns}
              dataSource={carts}
              loading={isLoading}
              showPagination={false}
              showSizeChanger={false}
            />
            <h2 className="text-2xl font-bold my-4 ml-2">
              Total Price :$ <span className="text-blue-800">{totalPrice}</span>{" "}
            </h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckOutPage;
