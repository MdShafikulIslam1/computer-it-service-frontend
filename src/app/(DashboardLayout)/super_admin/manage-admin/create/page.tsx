"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { Button, Col, Row, Space, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  role?: string;
}

const CreateAdminPage = () => {
  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (values: IFormValues) => {
    values.role = "admin";
    message.loading("Creating ....");
    try {
      const res = await createUser(values).unwrap();
      if (res?.id) {
        message.success("Admin Created successfully");
        router.push("/super_admin/manage-admin");
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
            Admin Information:
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <Space direction="vertical">
                <div>
                  <FormInput
                    type="text"
                    name="name"
                    label="Full Name"
                    placeHolder="Enter your Name"
                    required={true}
                  />
                </div>
                <div>
                  <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    placeHolder="Enter Email"
                    required={true}
                  />
                </div>
                <div>
                  <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    placeHolder="Enter Password"
                    required={true}
                  />
                </div>
              </Space>
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

export default CreateAdminPage;
