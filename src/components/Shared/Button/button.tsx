import { ButtonHTMLType, ButtonSize, ButtonType } from "@/shared/enums";
import { Button } from "antd";
import React from "react";

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
  htmlType?: ButtonHTMLType;
  size?: ButtonSize;
  icon?: React.ReactNode;
  href?: string;
}

const CommonButton = ({
  children,
  onClick,
  type = ButtonType.primary,
  className = "",
  disabled = false,
  loading = false,
  style,
  htmlType = ButtonHTMLType.button,
  size = ButtonSize.middle,
  icon,
  href,
}: CommonButtonProps) => {
  return (
    <div>
      <Button
        onClick={onClick}
        type={type}
        className={className}
        disabled={disabled}
        loading={loading}
        style={style}
        htmlType={htmlType}
        size={size}
        icon={icon}
        href={href}
      >
        {children}
      </Button>
    </div>
  );
};

export default CommonButton;
