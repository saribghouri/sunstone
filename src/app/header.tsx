import React from "react";
import type { MenuProps } from "antd";
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const Commonheder = () => {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <>
          <div className="user-profile">
            <Avatar
              className="user-avatar"
              icon={
                <img src="/assets/images/profile-pic.png" alt="user-avatar" />
              }
            />
            <div>
              <h4 className="user-name">Alexander Gerrard</h4>
              <p className="user-email">alexander@email.com</p>
            </div>
          </div>
          <Divider className="divider" />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <p
          className="profile"
          onClick={() => {
            router.push("/profile");
          }}
        >
          Profile
        </p>
      ),
    },
    {
      label: <p className="logout">Sign Out</p>,
      key: "logout",
    },
  ];
  return (
    <div className="header-container">
      <Header>
        <div className="header-title">
          <div className="header-menu cp">
            <Dropdown
              trigger={["click"]}
              menu={{ items }}
              placement="bottomLeft"
            >
              <div className="user-profile">
                <Avatar
                  icon={
                    <img
                      src="/assets/images/profile-pic.png"
                      alt="user-avatar"
                    />
                  }
                />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </div>
  );
};
export default Commonheder;
