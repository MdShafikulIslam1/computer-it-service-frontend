import Form from "@/components/Form/Form";
import FAQPart from "./FAQPart";
import FormTextArea from "@/components/Form/FormTextArea";
import { SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Space, message } from "antd";
import FormInput from "@/components/Form/FormInput";
import { useCreateFeedbackMutation } from "@/redux/api/feedbackApi";

const FAQPage = () => {
  const [createFeedback] = useCreateFeedbackMutation();
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    message.loading("feedback submitting ....");
    try {
      const res = await createFeedback(values).unwrap();
      if (res?.id) {
        message.success("Successfully submitted your feedback");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <div className="flex justify-between items-start gap-4 my-24">
      <div className="w-full lg:w-1/2 py-2 px-6">
        <h3 className="text-blue-700 font-semibold text-2xl my-2">FAQs ----</h3>
        <h1>Frequently Asked Question</h1>
        <div>
          <FAQPart />
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          padding: "15px",
        }}
        className="w-full lg:w-1/2 "
      >
        <Space direction="vertical" size="large">
          <h1 className="text-blue-500">Give Feedback</h1>
          <p className="text-green-500 text-xl">
            What do you think to improve our service?
          </p>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                        label="Name"
                        placeHolder="Your Name"
                        required={true}
                      />
                    </div>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={8}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormInput
                        type="email"
                        name="email"
                        label="Mail"
                        placeHolder="Your Email"
                        required={true}
                      />
                    </div>
                  </Col>
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
                        name="contactNo"
                        label="Phone Number"
                        placeHolder="Your Contact Number"
                        required={true}
                      />
                    </div>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={24}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <FormTextArea
                        name="feedbackComments"
                        label="Do you have thoughts you 'd like to share?"
                        placeHolder="share your improvement logic"
                        required={true}
                      />
                    </div>
                  </Col>
                </Row>
                <Button
                  style={{ fontWeight: "bold" }}
                  htmlType="submit"
                  type="primary"
                >
                  Feedback
                </Button>
              </div>
            </Form>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default FAQPage;
