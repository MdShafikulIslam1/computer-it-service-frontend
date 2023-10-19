import { Button, Result, Row } from "antd";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button style={{ fontWeight: "bold" }} type="primary">
            <Link href={"/home"}>Back Home</Link>
          </Button>
        }
      />
    </Row>
  );
};

export default NotFoundPage;
