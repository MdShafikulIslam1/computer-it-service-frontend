import { Row, Space, Spin } from "antd";

interface IProps {
    isLoading:boolean
}

const Loading = ({isLoading}:IProps) => {
    if (isLoading) {
        return (
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <Space size={"large"} direction="vertical" style={{ width: "100%" }}>
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            </Space>
          </Row>
        );
      }
};

export default Loading;