"use client";

import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button, Input, Table } from "antd";

import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";

import CommonHeader from "../header";

interface DataType {
  key: React.Key;
  Company: string;
  Snow: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Company",
    dataIndex: "Company",
  },
  {
    title: "Snow UI",
    dataIndex: "Snow",
    render: (text, record) => (
      <span>
        {text}
        {record.Company === "Email" && (
          <Button className="verified" type="primary" size="small">
            Verified
          </Button>
        )}
      </span>
    ),
  },
];
const data: DataType[] = [
  {
    key: "1",
    Company: "Email",
    Snow: "Alexander@gmail.com",
  },
  {
    key: "2",
    Company: "Company Site",
    Snow: "snowui.byewind.com",
  },
  {
    key: "3",
    Company: "Membership",
    Snow: "Free",
  },
];

const Pages = () => {
  return (
    <div>
      <CommonHeader />
      <div className="welcome-profile-content">
        <div className="profile-bar">
          <Paragraph type="secondary" className="get-started-text-Overview">
            Profile Details
          </Paragraph>
        </div>
        <div className="table-parent">
          <Table
            className="table-content"
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={false}
            bordered={false}
            style={{ border: "none" }}
          />
        </div>
      </div>
      <div className="sign-method">
        <div className="profile-bar">
          <Paragraph type="secondary" className="sign-in-heading">
            Sign in Method
          </Paragraph>
        </div>
        <div className="inputs">
          <Input className="email" placeholder="Email" type="email" />
          <Input className="password" placeholder="Password" type="password" />
        </div>

        <Button className="change-btn">Change Password</Button>
      </div>
    </div>
  );
};

export default Pages;
