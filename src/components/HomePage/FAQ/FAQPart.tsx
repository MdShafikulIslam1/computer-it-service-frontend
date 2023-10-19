
import { Collapse, Space} from "antd";

const { Panel } = Collapse;

const faqs = [
  {
    question:
      "What services does your computer repair and IT service company offer?",
    answer:
      "We offer a wide range of services, including computer repair, hardware and software troubleshooting, virus and malware removal, data recovery, network setup, IT consulting, and managed IT services for businesses.",
  },
  {
    question:
      "How experienced are your technicians in computer repair and IT services?",
    answer:
      "Our technicians have years of experience in the field and are highly trained and certified to handle a variety of computer and IT-related issues. We continually invest in their education to stay updated with the latest technologies.",
  },
  {
    question: "Do you provide on-site or remote support for IT issues?",
    answer:
      "We offer both on-site and remote support services. For urgent issues, we can dispatch a technician to your location. For less critical problems, we can provide remote assistance to address your IT needs quickly and efficiently.",
  },
  {
    question: "What industries does your IT service company cater to?",
    answer:
      "We serve clients across various industries, including healthcare, finance, education, small businesses, and more. Our customized IT solutions are tailored to meet the specific needs and requirements of each industry.",
  },
  {
    question:
      "How can I request a service or schedule IT support from your company?",
    answer:
      "You can request our services by contacting our customer support team through our website, phone, or email. Our friendly staff will guide you through the process and schedule a service appointment or consultation at your convenience.",
  },
];

const FAQPart = () => {
  return (
    <Space direction="vertical" style={{ width: "100%", margin: "20px 0px" }}>
      <Collapse  accordion bordered>
        {faqs.map((faq, index) => (
          <Panel style={{fontWeight:"bold"}} header={faq.question} key={index}>
         <p style={{fontWeight:"normal"}}>   {faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </Space>
  );
};

export default FAQPart;
