import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Tooltip, message } from "antd";

const DeletePromptButton = ({ data, deleteHandler }: any) => {
  const cancel = () => {
    message.error("Click on No");
  };
  const confirm = () => {
    deleteHandler(data?.id);
  };
  return (
    <Popconfirm
      title={`Delete ${data?.title}`}
      description="Are you sure to delete?"
      icon={<DeleteOutlined />}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Tooltip title="Delete" color="#ab3428" placement="top">
        <Button type="primary" danger>
          <DeleteOutlined />
        </Button>
      </Tooltip>
    </Popconfirm>
  );
};

export default DeletePromptButton;
