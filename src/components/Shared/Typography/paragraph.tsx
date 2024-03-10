"use client";

import React from "react";
import { Typography } from "antd";

interface ParagraphProps {
  children: React.ReactNode;
  type: "secondary" | "warning" | "danger" | "success";
  className?: string;
}

const { Text } = Typography;

const Paragraph = ({ children, type, className }: ParagraphProps) => {
  return (
    <Text type={type} className={className}>
      {children}
    </Text>
  );
};

export default Paragraph;
