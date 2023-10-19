"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

interface IFormValues {
  title: string;
}

const CreateCategoryPage = () => {
  const router = useRouter();
  const [createCategory] = useCreateCategoryMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (values: IFormValues) => {
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
            </Col>
          </Row>
          <Button style={{ fontWeight: "bold" }} htmlType="submit" type="primary">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateCategoryPage;
