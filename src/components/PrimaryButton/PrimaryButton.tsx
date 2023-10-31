import { Button } from "antd";
import { ReactNode } from "react";

type IButtonProps = {
  title: string;
  icon?: ReactNode;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  isBlock?: boolean;
  size?: "large" | "middle" | "small";
};
const PrimaryButton = ({
  type = "primary",
  isBlock = false,
  size = "large",
  title,
  icon,
}: IButtonProps) => {
  return (
    <Button
      style={{ fontWeight: "bold" }}
      type={type}
      block={isBlock}
      size={size}
      className="absolute bottom-0 left-0"
    >
      {title} {icon}
    </Button>
  );
};

export default PrimaryButton;
