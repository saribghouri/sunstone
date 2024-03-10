"use client";

import React from "react";
import { Typography } from "antd";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const { Title } = Typography;

const Heading = ({ children, level, className }: HeadingProps) => {
  return (
    <Title level={level} className={className}>
      {children}
    </Title>
  );
};

export default Heading;
