import { Tooltip } from "antd";
import React from "react";
interface Props {
  children: React.ReactElement | React.ReactNode;
  title: string;
  color?: string;
  placement?:
    | "left"
    | "topLeft"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
}
const TooltipTitle = ({ children, title, placement, color }: Props) => {
  return (
    <Tooltip title={title} color={color} placement={placement}>
      {children}
    </Tooltip>
  );
};

export default Tooltip;
