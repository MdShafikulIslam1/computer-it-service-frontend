"use client";
import { SubmitHandler } from "react-hook-form";
import { Row, Col, Button, message } from "antd";
import Image from "next/image";
import signupImage from "../../assests/images/signup-image.png";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import { useSignupUserMutation } from "@/redux/api/authApi";
import Link from "next/link";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  role?: string;
}
const SignUpPage = () => {
  const router = useRouter();
  const [signupUser] = useSignupUserMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      const res = await signupUser({ ...data }).unwrap();
      if (res?.id) {
        message.success("User Registration successfully");
        router.push("/login");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row className="min-h-[90vh] md:flex gap-2 md:gap-6 lg:gap-12 justify-center items-center  w-full p-2 lg:4">
      <Col sm={24} md={16} lg={8}>
        <Image src={signupImage} alt="login image" width={400} priority />
      </Col>
      <Col sm={24} md={8} lg={6}>
        <h1 className=" text-sm my-2 md:my-4 md:text-2xl tracking-normal md:tracking-wide lg:text-center lg:tracking-widest">
          Register Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="name"
                type="text"
                label="Name"
                placeHolder="Enter User Name"
                allowClear={true}
                required={true}
              />
            </div>

            <div
              style={{
                margin: "1rem 0rem",
              }}
            >
              <FormInput
                name="email"
                type="email"
                label="User Email"
                placeHolder="Enter Email"
                required={true}
              />
            </div>
            <div
              style={{
                margin: "1rem 0rem",
              }}
            >
              <FormInput
                name="password"
                type="password"
                label="Password"
                placeHolder="Enter Password"
                required={true}
              />
            </div>

            <Button
              className="bg-primary text-white"
              block
              type="primary"
              htmlType="submit"
            >
              Create an Account
            </Button>
            <div className="my-1 md:my-4 flex text-lg gap-5 font-lg">
              <p>Already have an account?</p>
              <Link href="/login">Login</Link>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpPage;
