"use client";

import Heading from "@/components/Shared/Typography/headings";
import Paragraph from "@/components/Shared/Typography/paragraph";
import { Avatar, Divider, Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import CommonHeader from "../header";

const Homepage = () => {
  const router = useRouter();
  const { Header } = Layout;

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="user-profile">
          <Avatar
            icon={
              <img src="/assets/images/profile-pic.png" alt="user-avatar" />
            }
          />
        </div>
      ),
      key: "SubMenu",
      children: [
        {
          label: "Account Settings",
          key: "settings",
        },
        {
          label: "Logout",
          key: "logout",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="header-container">
        <CommonHeader />
      </div>
      <div className="welcome-content">
        <Heading level={3} className="welcome-user">
          Welcome back, Alex
        </Heading>
        <div className="get-started-content">
          <div className="get-started-text-content">
            <Paragraph type="secondary" className="get-started-text">
              Get Started
            </Paragraph>
            <Heading level={3}>What’s Sunstone?</Heading>
            <Paragraph type="secondary">
              Our Services We offer a diverse range of services to meet the
              unique needs of our clients. We provide comprehensive solutions
              that drive success. Explore our services to find out how we can
              help you achieve your goals.
            </Paragraph>
            <Heading level={3}>
              How can I build production-ready apps on Sunstone?
            </Heading>
            <Paragraph type="secondary">
              Our Services We offer a diverse range of services to meet the
              unique needs of our clients. We provide comprehensive solutions
              that drive success. Explore our services to find out how we can
              help you achieve your goals.
            </Paragraph>
            <Heading level={3}>Why should I use Sunstone?</Heading>
            <Paragraph type="secondary">
              Our Services We offer a diverse range of services to meet the
              unique needs of our clients. We provide comprehensive solutions
              that drive success. Explore our services to find out how we can
              help you achieve your goals.
            </Paragraph>
          </div>
          <div className="get-started-image">
            <img src="/assets/images/rocket-with-bg.png" alt="get-started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
