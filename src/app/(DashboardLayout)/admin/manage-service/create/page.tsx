"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormSelectField, {
  ISelectOptions,
} from "@/components/Form/FormSelectField";
import FormTextArea from "@/components/Form/FormTextArea";
import { serviceStatusOptions } from "@/constant/global";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useCreateServiceMutation } from "@/redux/api/servicesApi";
import { IService } from "@/types/globalType";
import { Button, Col, message, Row } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const CreateServicePage = () => {
  const router = useRouter();
  const [photoUrl, setPhotoUrl] = useState();
  const { data } = useGetAllCategoriesQuery({ limit: 10, page: 1 });
  const categoriesOptions = data?.categories?.map((category: any) => {
    return {
      label: category?.title,
      value: category?.id,
    };
  });

  const [createService] = useCreateServiceMutation();
  const onSubmit: SubmitHandler<IService> = async (values: any) => {
    if (!photoUrl) {
      return message.error("Please provide a service image");
    }

    values.fee = parseInt(values?.fee);
    values.durationInMinutes = parseInt(values?.durationInMinutes);
    values.warranty = parseInt(values?.fee);

    const data = JSON.stringify(values);
    const formData = new FormData();
    formData.append("file", photoUrl as Blob);
    formData.append("data", data);

    // const formData = new FormData();
    // formData.append("file", photoUrl as Blob);
    // formData.append("data", values);
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
    //   values.imageUrl = imageUrl;
    // } else {
    //   message.error("Image upload failed.");
    // }

    // message.loading("Creating ....");
    try {
      const res = await createService(formData).unwrap();
      if (res?.id) {
        message.success("Service Created successfully");
        router.push("/admin/manage-service");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
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
            Service Information:
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {/* service name */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  name="name"
                  label="Service Name"
                  placeHolder="Enter Service Name"
                  required={true}
                />
              </div>
            </Col>
            {/* service category */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormSelectField
                  name="categoryId"
                  label="Category"
                  options={categoriesOptions as ISelectOptions[]}
                  required={true}
                  size="large"
                />
              </div>
            </Col>
            {/* service Fee */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="number"
                  name="fee"
                  label="Service Fee"
                  placeHolder="Enter Service Fee"
                  required={true}
                />
              </div>
            </Col>
            {/* Duration minutes */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="number"
                  name="durationInMinutes"
                  label="Repair Time(minutes)"
                  placeHolder="Service Estimate Time"
                  required={true}
                />
              </div>
            </Col>
            {/* warranty month */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="number"
                  name="warranty"
                  label="Warranty(months)"
                  placeHolder="Service Warranty"
                  required={false}
                />
              </div>
            </Col>
            {/* status  */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormSelectField
                  name="status"
                  label="Status"
                  options={serviceStatusOptions}
                  placeHolder="Enter Service Status"
                  required={true}
                />
              </div>
            </Col>
            {/* description  */}
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormTextArea
                  name="description"
                  label="Description"
                  placeHolder="Service Description"
                  required={true}
                />
              </div>
            </Col>
            {/* image upload  */}
            <Col
              className="gutter-row"
              span={8}
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
          <Button
            style={{ fontWeight: "bold" }}
            htmlType="submit"
            type="primary"
          >
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateServicePage;
