"use client";
import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button } from "antd";
import React from "react";
import CommonHeader from "../header";

const Pages = () => {
  return (
    <div>
      <CommonHeader />
      <div className="hackathons-content">
        <div className="get-started-text-content">
          <Paragraph type="secondary" className="get-started-text">
            Coming soon!
          </Paragraph>
          <h1 className="hd">Hackathons</h1>
          <Paragraph className="hackathons-prg" type="secondary">
            Regularly uniting the brightest from universities and institutions,
            our Hackathons are a hub of inventive spirit. They &apos; re an
            arena where theoretical knowledge and cutting-edge research collide
            to create practical, innovative applications. Join us to code,
            create, and change the future.
          </Paragraph>
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
              Never miss a hack: Be a consistent code champion!<br></br> Sign up
              to stay in the loop with our frequent hackathon happenings.
            </Paragraph>
          </div>
          <div className="bottom-second-side">
            <div className="input-button-parent">
              <Button className="join-button">Join our waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
