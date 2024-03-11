import { RightCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import { ReactNode } from "react";

type IButtonProps = {
  title: string;
  icon?: ReactNode;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  isBlock?: boolean;
  size?: "large" | "middle" | "small";
  href?: string;
  className?: string;
};
const PrimaryButton = ({
  type = "primary",
  isBlock = false,
  size = "large",
  title,
  icon ,
  href,
  className,
}: IButtonProps) => {
  return (
    <Button
      href={href}
      type={type}
      block={isBlock}
      size={size}
      className={`${className}`}
    >
      {title} {icon}
    </Button>
  );
};

export default PrimaryButton;
