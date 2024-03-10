import { Button, Divider, Input, Modal } from "antd";
import Paragraph from "@/components/Shared/Typography/paragraph";
import dataa from "../../shared/json/index.json";
import React, { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { credentialsdata } from "../redux/features/credentials";
import { unwrapResult } from "@reduxjs/toolkit";
import { deleteApplication } from "../redux/features/deleteApp";
const Credentials = () => {
  const dispatch: AppDispatch = useDispatch();
  const [credential, setcredential]: any = useState([]);
  console.log("credential:", credential);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchHighlightsList = async () => {
      try {
        const highlightData = await dispatch(credentialsdata()).then(
          unwrapResult
        );
        console.log("Fetched highlightData:", highlightData);

        if (Array.isArray(highlightData)) {
          setcredential(highlightData);
        } else {
          console.error(
            "Expected highlightData to be an array but got:",
            typeof highlightData
          );
        }
      } catch (error) {
        console.error("Error fetching media data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHighlightsList();
  }, [dispatch]);

  const credentials = dataa;
  const credentialdata = credential;
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteButtonClick = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteModalOk = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalVisible(false);
  };
  const handleDeleteButtonClicks = () => {
    const appId =
      "mcf0ir7ctTNPSuzexQtUVZ4zLk7r4sAdcJp5529YIKKBXYPOLIg5xs6rrKCPCvIq";
    const userId = "alexander@gmail.com";

    dispatch(deleteApplication(appId));
  };
  return (
    <div className="application-credential-content">
      <div className="application-credential-bar">
        <img
          className="top-first-side-img"
          src="/assets/images/key.png"
          alt="logo"
        />
        <Paragraph type="secondary" className="get-started-text-Overview">
          Applications
        </Paragraph>
      </div>

      <div className="application-credential-bar2">
        <div className="bar2-child">
          <img
            className="top-second-side-img"
            src="/assets/images/Frame.png"
            alt="logo"
          />
          <Paragraph type="secondary" className="get-started-text-Overview">
            {credentialdata.length > 0
              ? credentialdata[0].AppName
              : "Loading..."}
          </Paragraph>
        </div>
        <Divider />
        <div className="clientid">
          <h3 className="clientid-hd">Client ID</h3>
          <p className="clientid-prg">
            {" "}
            {credentialdata.length > 0 ? credentialdata[0].AppID : "Loading..."}
          </p>
        </div>
        <br />
        <div className="client-secret">
          <h3 className="clientid-hd">client secret</h3>
          <p className="clientid-prg">
            {" "}
            {credentialdata.length > 0
              ? credentialdata[0].AppSecret
              : "Loading..."}
          </p>
        </div>
        <Divider />
        <div>
          <button>Delete my application</button>
        </div>

        <div className="client-last-section">
          <div>
            <p className="last-section-prg">
              Permanently delete the application
            </p>
            <p className="last-section-prg2">
              All apps using this Client ID will stop working
            </p>
          </div>
          <Button onClick={handleDeleteButtonClick}>Delete</Button>

          <Modal
            className="delete-modal"
            visible={isDeleteModalVisible}
            onOk={handleDeleteModalOk}
            footer={null}
            width={1200}
            onCancel={handleDeleteModalCancel}
            closeIcon={null}
          >
            <div>
              <div className="application-delete-top">
                <div className="top-first-side">
                  <Paragraph className="top-first-side-text" type="secondary">
                    Are you absolutely sure?
                  </Paragraph>
                </div>

                <div className="input-top-parent">
                  <Button
                    onClick={() => {
                      handleDeleteModalCancel();
                    }}
                    className="join-button"
                  >
                    X
                  </Button>
                </div>
              </div>
              <div className="delete-application">
                <div className="application-bar">
                  <Paragraph
                    type="secondary"
                    className="get-started-text-Overview"
                  >
                    name
                  </Paragraph>
                  <Input placeholder="My App" />
                  <Paragraph type="secondary" className="text-application">
                    Please note that the application name must be unique, and
                    you cannot change the application name later.
                    <Divider />
                  </Paragraph>
                </div>
                <div className="create-app-btn">
                  <Button
                    onClick={() => {
                      handleDeleteButtonClicks();
                    }}
                    className="Create-btn2"
                  >
                    Delete{" "}
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
