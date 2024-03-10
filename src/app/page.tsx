"use client";

import Heading from "@/components/Shared/Typography/headings";
import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button } from "antd";
import React from "react";

const Page = () => {
  return (
    <div className="home-content">
      <Heading level={3} className="welcome-sunstone">
        <img src="/assets/images/sunstone_logo.png" alt="logo" />
        <span className="welcome-user-name">Sunstone</span>
      </Heading>
      <div className="get-started">
        <div className="get-started-text">
          <Paragraph type="secondary" className="get-started-idea">
            You have the idea, you have your app in minutes
          </Paragraph>
          <br></br>
          <Paragraph className="get-started-idea-text" type="secondary">
            We offer a offers a suite of production-ready services to compose
            apps. Using Sunstone, many projects that used to take 6-12 months
            can be built and fully deployed in a few days.
          </Paragraph>
        </div>
        <div className="get-started-image">
          <img
            width={400}
            height={400}
            src="/assets/images/rocket-without-bg.png"
            alt="get-started"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-first-side">
          <div className="img-parent">
            <img
              className="bottom-first-side-img"
              src="/assets/images/sunstone_logo.png"
              alt="logo"
            />
          </div>
          <Paragraph className="bottom-first-side-text" type="secondary">
            Act now—space is limited! Our first round of spots was snapped up
            instantly, but we&apos;re working tirelessly to expand capacity.
            Join our priority waitlist today
          </Paragraph>
        </div>
        <div className="bottom-second-side">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="input-button-parent">
            <input className="inp-email" placeholder="Email" />
            <Button className="join-button">Join our waitlist</Button>
          </div>
          <p className="input-text">
            {" "}
            We are onboarding new clients on a rolling basis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
