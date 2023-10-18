"use client";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { getUserInfo } from "@/service/authentication.service";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { Avatar, Button, Col, Row, message } from "antd";
import FormDatePicker from "@/components/Form/FormDatePicker";
import { useState } from "react";
import dayjs from "dayjs";
const ProfilePage = () => {
  const [photoUrl, setPhotoUrl] = useState();
  const user = getUserInfo() as any;
  const { role, email } = user;
  const { data } = useGetSingleUserQuery(email);
  const router = useRouter();
  const [updateUser] = useUpdateUserMutation();
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    const formData = new FormData();
    formData.append("file", photoUrl as unknown as Blob);
    formData.append("upload_preset", "hsde6mhe");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dr8smmidd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      const imageUrl = data.secure_url;
      values.profileImage = imageUrl;
    } else {
      message.error("Image upload failed.");
    }

    message.loading("Updating ....");
    try {
      const res = await updateUser({ id: data?.id, data: values }).unwrap();
      if (res?.id) {
        message.success("Profile updated successfully");
        router.push("/profile");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const defaultValues = {
    name: data?.name || "",
    address: data?.address || "",
    contactNo: data?.contactNo || "",
    emergencyContactNo: data?.emergencyContactNo || "",
    nationality: data?.nationality || "",
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
            height: "100%",
          }}
          className="shadow-md"
          span={6}
        >
          <div className="flex flex-col mx-auto items-center justify-center h-48 w-48  my-10">
            <div>
              {!!data?.profileImage ? (
                <Image
                  src={data?.profileImage || ""}
                  alt="service image"
                  width={192}
                  height={192}
                  className="object-center w-full h-full rounded-2xl"
                  priority
                />
              ) : (
                <Avatar
                  size={192}
                  icon={<UserOutlined className="text-center" />}
                >
                  Not Found
                </Avatar>
              )}
            </div>
            <p className="font-bold text-xl text-green-500 my-2 ">
              {data?.name}
            </p>
          </div>
          {/* <Button className="mx-auto w-1/2" type="primary">
            Upload New Photo
          </Button> */}
          <p className="mt-4">
            Member since: <span className="text-blue-400 text-md">{dayjs(`${data?.createdAt}`).format("MMM D, YYYY")}
            </span>
          </p>
        </Col>
        <Col span={18}>
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
