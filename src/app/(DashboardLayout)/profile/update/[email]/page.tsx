"use client";
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const EditProfile = ({ params }: any) => {
  const [photoUrl, setPhotoUrl] = useState();
  const { email } = params;
  const { data } = useGetSingleUserQuery(email);
  const router = useRouter();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    try {
      const res = await updateUser({ id: data?.id, data: values }).unwrap();
      if (res?.id) {
        message.success("Profile updated successfully");
        router.push("/profile");
      }
    } catch (error: any) {
      message.error(error.message);
    }
    // const formData = new FormData();
    // formData.append("file", photoUrl as unknown as Blob);
    // formData.append("upload_preset", "hsde6mhe");
    // const response = await fetch(
    //   "https://api.cloudinary.com/v1_1/dr8smmidd/image/upload",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // );

    // if (response.ok) {
    //   const data = await response.json();
    //   const imageUrl = data.secure_url;
    //   values.profileImage = imageUrl;
    // } else {
    //   message.error("Image upload failed.");
    // }

    // message.loading("Updating ....");
  };
  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    address: data?.address || "",
    contactNo: data?.contactNo || "",
    emergencyContactNo: data?.emergencyContactNo || "",
    nationality: data?.nationality || "",
  };

  console.log("default values", defaultValues);

  return (
    <div>
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
                    required={false}
                  />
                </div>
              </Col>
              {/* email */}
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
                    placeHolder="Enter Your Email"
                    disabled={true}
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
                  <FormDatePicker name="dateOfBirth" label="Date of Birth" />
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
            </Row>
            <LoadingButton
              title="Save Changes"
              disableTitle="saving"
              isLoading={isLoading}
              size="middle"
              className="bg-primary"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
