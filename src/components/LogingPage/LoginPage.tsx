"use client";
import { UserOutlined } from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import { Row, Col, Button, message } from "antd";
import Image from "next/image";
import loginImage from "../../assests/images/login-image.png";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/redux/api/authApi";
import Link from "next/link";
import { storeUserInfo } from "@/service/authentication.service";

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      const res = await loginUser({ ...data }).unwrap();
      if (res?.accessToken) {
        message.success("User logged in successfully");
        router.push("/home");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row className="min-h-[90vh] md:flex gap-2 md:gap-4 lg:gap-10 justify-center items-center  w-full p-2 lg:4">
      <Col sm={24} md={16} lg={6}>
        <Image
          src={loginImage}
          alt="login image"
          layout="responsive"
          width={400}
          priority
        />
      </Col>
      <Col sm={24} md={8} lg={6}>
        <h1 className=" text-sm my-2 md:my-4 md:text-2xl tracking-normal md:tracking-wide lg:text-center lg:tracking-widest">
          Login Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="email"
                label="Email"
                placeHolder="Enter User Email"
                prefix=<UserOutlined />
                allowClear={true}
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
                label="User Password"
                placeHolder="Enter Correct Password"
                size="large"
              />
            </div>

            <Button block type="primary" htmlType="submit">
              Login
            </Button>
            <div className="my-1 md:my-4 text-start font-lg">
              <Link href="/home">forget password?</Link>
            </div>
            <hr />
            <div className="my-1 md:my-4">
              <Link href="/sign-up">
                <Button block>Create An Account</Button>
              </Link>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
