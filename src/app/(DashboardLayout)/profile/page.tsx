"use client";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/service/authentication.service";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { Avatar, Button, Col, Row, message } from "antd";
import FormDatePicker from "@/components/Form/FormDatePicker";
import { useState } from "react";
const ProfilePage = () => {
  const [photoUrl, setPhotoUrl] = useState();
  const user = getUserInfo() as any;
  const { role, email } = user;
  const { data } = useGetSingleUserQuery(email);
  const router = useRouter();
  const [createCategory] = useCreateCategoryMutation();
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    console.log(values);
    message.loading("Creating ....");
    try {
      const res = await createCategory(values).unwrap();
      if (res?.id) {
        message.success("Category Created successfully");
        router.push("/admin/manage-category");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          margin: "10px",
          height: "100vh",
        }}
      >
        <Col
          style={{
            border: "1px solid #d9d9d9",
            height: "100vh",
          }}
          span={8}
        >
          <p className="text-center font-bold text-2xl text-orange-400 my-4">
            {data?.name}
          </p>
          <div className="flex flex-col mx-auto items-center justify-center h-40 w-40 border 0 rounded-full my-10">
            <div>
              {!!data?.profile ? (
                <Image
                  src={""}
                  alt="service image"
                  width={500}
                  height={500}
                  className="object-center w-full h-full rounded-xl"
                />
              ) : (
                <Avatar
                  size={160}
                  icon={<UserOutlined className="text-center" />}
                >
                  Not Found
                </Avatar>
              )}
            </div>
          </div>
          <Button className="mx-auto w-1/2" type="primary">
            Upload New Photo
          </Button>
          <p>
            Member since: <span>{data?.createdAt}</span>
          </p>
        </Col>
        <Col
          style={{
            border: "1px solid #d9d9d9",
          }}
          span={16}
        >
          <div>
            <Form submitHandler={onSubmit}>
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
                  Your Personal Information:
                </p>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {/* name */}
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
                        label="Full Name"
                        placeHolder="Enter Your Full Name"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/* address */}
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
                        label="Address"
                        placeHolder="Enter Your Address"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/* contact Number */}
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
                        label="ContactNo"
                        placeHolder="Enter Contact Number"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/*emergency contact Number */}
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
                        label="Emergency ContactNo"
                        placeHolder="Enter Emergency ContactNo"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/*date of birth */}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormDatePicker
                        name="dateOfBirth"
                        label="Date of Birth"
                      />
                    </div>
                  </Col>
                  {/*Nationality*/}
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
                        name="nationality"
                        label="Nationality"
                        placeHolder="Enter Nationality"
                        required={true}
                      />
                    </div>
                  </Col>
                  {/* image upload  */}
                  <Col
                    className="gutter-row"
                    span={12}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <input
                        type="file"
                        name="imageUrl"
                        //@ts-ignore
                        onChange={(e) => setPhotoUrl(e.target.files[0])}
                      />
                    </div>
                  </Col>
                </Row>
                <Button htmlType="submit" type="primary">
                  Changes Save
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
