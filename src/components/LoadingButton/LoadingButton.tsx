import { Button } from "antd";
import { ReactNode } from "react";

interface IProps {
  isLoading: boolean;
  title: string;
  disableTitle: string;
  icon?: ReactNode;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  isBlock?: boolean;
  size?: "large" | "middle" | "small";
  href?: string;
  className?: string;
}

const LoadingButton = ({
  type = "primary",
  isBlock = false,
  size = "large",
  title,
  disableTitle,
  isLoading,
  icon,
  href,
  className,
}: IProps) => {
  return (
    <Button
      style={{ fontWeight: "bold" }}
      htmlType="submit"
      type={type}
      loading={isLoading}
      disabled={isLoading}
      block={isBlock}
      size={size}
      className={`${className}`}
    >
      {isLoading ? `${disableTitle}....` : title}
    </Button>
  );
};

export default LoadingButton;
