"use client";

import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button, Divider } from "antd";

import React from "react";
import CommonHeader from "../header";

const Pages = () => {
  return (
    <div>
      <CommonHeader />
      <div className="welcome-api-docs">
        <Paragraph type="secondary" className="get-started-text-Overview">
          API Overview
        </Paragraph>
        <h1 className="hd">How to set API</h1>
        <div className="set-section">
          <Paragraph className="prg" type="secondary">
            Use images to enhance your post, improve its flow, add humor and
            explain complex topics.
          </Paragraph>
          <Button className="get-btn">Get Started</Button>
        </div>

        <Divider type="horizontal" />
        <h1 className="hd">Developer Tools </h1>
        <div className="set-section">
          <Paragraph className="prg" type="secondary">
            Plan your blog post by choosing a topic, creating an outline conduct
            research, and checking facts.
          </Paragraph>
          <Button className="get-btn">Create Rule</Button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
