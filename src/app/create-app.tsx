"use client";

import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button, Divider, Form, Input } from "antd";

import React, { useEffect, useState } from "react";

import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { createApplication } from "./redux/features/createApp";
import { unwrapResult } from "@reduxjs/toolkit";
import { message } from "antd";
const CreateApp = ({ onClose }: any) => {
  const [form] = Form.useForm();
  const [app_name, setAppname] = useState("");
  const [app_description, setAppdiscriptione] = useState("");
  const router = useRouter();

  const handleCloseModal = () => {
    onClose();
  };

  const dispatch: AppDispatch = useDispatch();
  const [appdata, setAppdata]: any = useState([]);
  console.log("appdata:", appdata);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const app_name = "YourAppName";
      const app_description = "YourAppDescription";

      const highlightData = await dispatch(
        createApplication({ app_name, app_description })
      ).then(unwrapResult);
      console.log("Fetched highlightData:", highlightData);

      if (Array.isArray(highlightData)) {
        setAppdata(highlightData);
        message.success("Data fetched successfully!");
        setIsLoading(true);
      } else {
        console.error(
          "Expected highlightData to be an array but got:",
          typeof highlightData
        );
        message.error("Data fetched is not in the expected format.");
      }
    } catch (error) {
      console.error("Error fetching media data:", error);
      message.error("Error fetching media data.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHighlightsList = async () => {};

  fetchHighlightsList();

  return (
    <div>
      <div className="application-top">
        <div className="top-first-side">
          <Paragraph className="top-first-side-text" type="secondary">
            <span className="span">+</span> Create Application
          </Paragraph>
        </div>

        <div className="input-top-parent">
          <Button
            onClick={() => {
              handleCloseModal();
            }}
            className="join-button"
          >
            X
          </Button>
        </div>
      </div>
      <div className="create-application-content">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="app_name"
            rules={[
              {
                required: true,
                message: "Please input your application name!",
              },
            ]}
          >
            <Input
              placeholder="My App"
              value={app_name}
              onChange={(e) => setAppname(e.target.value)}
            />
            <Paragraph type="secondary">
              Please note that the application name must be unique, and you
              cannot change the application name later.
            </Paragraph>
          </Form.Item>
          <Divider />

          <Form.Item
            label="Application Description"
            name="app_description"
            rules={[
              {
                required: true,
                message: "Please input your application description!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="An innovative application that streamlines ..."
              value={app_description}
              onChange={(e) => setAppdiscriptione(e.target.value)}
            />
          </Form.Item>

          <div className="create-app-btn">
            <Button className="Create-btn">Cancel</Button>
            <Button
              loading={isLoading}
              htmlType="submit"
              className="Create-btn2"
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateApp;
