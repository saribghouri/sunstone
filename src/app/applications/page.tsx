"use client";
import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button, Dropdown, MenuProps, Modal, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import CommonHeader from "../header";
import CreateApp from "../create-app";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchAppList } from "../redux/features/appApi";
import { AppDispatch } from "../redux/store";

interface DataType {
  key: React.Key;
  name: string;
  Client: string;
  options: { optionKey: string; optionValue: string }[];
}

const Pages = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const [highlights, setHighlights]: any = useState([]);
  console.log("highlights:", highlights);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHighlightsList = async () => {
      try {
        const highlightData = await dispatch(fetchAppList()).then(unwrapResult);
        console.log("Fetched highlightData:", highlightData);

        if (Array.isArray(highlightData)) {
          setHighlights(highlightData);
          message.success("Data fetched successfully!");
        } else {
          console.log("error");
        }
      } catch (error) {
        message.error("Error fetching media data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHighlightsList();
  }, [dispatch]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            router.push("/application?tab=credentials");
          }}
        >
          API Credentials
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            router.push("/application?tab=analytics");
          }}
        >
          Analytics
        </div>
      ),
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Client ID",
      dataIndex: "id",
    },
    // {
    //   title: "Client ID",
    //   dataIndex: "Second Application",
    // },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => (
        <div className="table-dropdown">
          <Dropdown
            className="selector-parent"
            menu={{ items: items }}
            trigger={["click"]}
            placement="top"
          >
            <div className="selector">
              <button className="selector-btn">...</button>
            </div>
          </Dropdown>
        </div>
      ),
    },
  ];

  const handleDeleteButtonClick = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteModalOk = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalVisible(false);
  };
  const router = useRouter();

  return (
    <div>
      <CommonHeader />
      <div className="welcome-application-content">
        <div className="application-bar">
          <Paragraph type="secondary" className="get-started-text-Overview">
            Applications
          </Paragraph>
          <Button
            onClick={() => {
              handleDeleteButtonClick();
            }}
            className="Create-btn"
          >
            Create Application
          </Button>
          <Modal
            className="delete-modal"
            visible={isDeleteModalVisible}
            onOk={handleDeleteModalOk}
            footer={null}
            width={1200}
            onCancel={handleDeleteModalCancel}
            closeIcon={null}
          >
            <CreateApp onClose={handleDeleteModalCancel} />
          </Modal>
        </div>
        <div className="table-parent">
          <Table
            className="table-content"
            columns={columns}
            dataSource={highlights}
            size="middle"
            pagination={false}
            bordered={false}
            loading={isLoading}
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
