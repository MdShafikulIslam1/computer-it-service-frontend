"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

interface IFormValues {
  title: string;
  description: string;
  logo: string;
}

const CreateCategoryPage = () => {
  const [photoUrl, setPhotoUrl] = useState();
  console.log(photoUrl);
  const router = useRouter();
  const [createCategory] = useCreateCategoryMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (values: IFormValues) => {
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
      values.logo = imageUrl;
    } else {
      message.error("Image upload failed.");
    }

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
            Category Information:
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {/* Category title */}
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
                  name="title"
                  label="Title"
                  placeHolder="Enter Category Title"
                  required={true}
                />
              </div>
              <div>
                <FormTextArea
                  name="description"
                  label="Description"
                  placeHolder="Enter category description"
                  required={true}
                />
              </div>
              <div className="mt-6">
                <input
                  type="file"
                  name="logo"
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

export default CreateCategoryPage;
