"use client";

import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button, Divider, Input } from "antd";

import React from "react";

const Pages = () => {
  return (
    <div>
      <div className="application-delete-top">
        <div className="top-first-side">
          <Paragraph className="top-first-side-text" type="secondary">
            Are you absolutely sure?
          </Paragraph>
        </div>

        <div className="input-top-parent">
          <Button className="join-button">X</Button>
        </div>
      </div>
      <div className="delete-application">
        <div className="application-bar">
          <Paragraph type="secondary" className="get-started-text-Overview">
            name
          </Paragraph>
          <Input placeholder="My App" />
          <Paragraph type="secondary" className="text-application">
            Please note that the application name must be unique, and you cannot
            change the application name later.
            <Divider />
          </Paragraph>
        </div>
        <div className="create-app-btn">
          <Button className="Create-btn2">Delete </Button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
