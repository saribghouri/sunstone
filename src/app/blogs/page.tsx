"use client";

import React from "react";
import Paragraph from "@/components/Shared/Typography/paragraph";
import { Button } from "antd";
import CommonHeader from "../header";

const Pages = () => {
  return (
    <div>
      <CommonHeader />
      <div className="welcome-blogs">
        <div className="get-started-blog">
          <div className="get-started-text-content">
            <Paragraph type="secondary" className="get-started-blog-text">
              Latest Blogs
            </Paragraph>
          </div>
          <div className="blog-card">
            <div>
              <img
                src="/assets/images/image 36.png"
                alt="user-profile-dropdown"
              />
            </div>
            <div className="blog-card-child">
              <h1 className="blog-card-hd">
                UX & Web Design Master Course: Strategy, Design, Development
              </h1>
              <p className="blog-prg">
                Learn how to apply User Experience (UX) principles to your
                website designs Learn how to apply User Experience (UX)
                principles to your website designs...
              </p>
              <Button className="blog-card-btn">Large Language Models</Button>
            </div>
          </div>
          <div className="blog-card">
            <div>
              <img
                src="/assets/images/image 50.png"
                alt="user-profile-dropdown"
              />
            </div>
            <div className="blog-card-child">
              <h1 className="blog-card-hd">
                Gamification: Motivation Psychology & The Art of Engagement
              </h1>
              <p className="blog-prg">
                Learn how to motivate and engage anyone by learning the
                psychology that u Learn how to motivate and engage anyone by
                learning the psychology that u...
              </p>
              <Button className="blog-card-btn">Generative Image Models</Button>
            </div>
          </div>
          <div className="blog-card">
            <div>
              <img
                src="/assets/images/image 48.png"
                alt="user-profile-dropdown"
              />
            </div>
            <div className="blog-card-child">
              <h1 className="blog-card-hd">
                SOLID Principles: Introducing Software Architecture & Design
              </h1>
              <p className="blog-prg">
                Gain mastery over SOLID Principles and write clean and
                well-designed code in Gain mastery over SOLID Principles and
                write clean and well-designed code in...
              </p>
              <Button className="blog-card-btn">
                Natural Language Processing
              </Button>
            </div>
          </div>
        </div>
        <div className="second-blog-card">
          {" "}
          <Paragraph type="secondary" className="second-blog-top-text ">
            Recommended Course
          </Paragraph>
          <div className="img-parent">
            <img
              src="/assets/images/image 50.png"
              alt="user-profile-dropdown"
            />
            <img
              className="centered-image"
              src="/assets/images/Group 1364.png"
              alt="user-profile-dropdown"
            />
          </div>
          <div className="pricing">
            <h1 className="pricing-text-1">
              {" "}
              <span className="text-span">$</span> 8.99
              <span className="text-span-2">$10.99</span>
            </h1>
            <br></br>
            <h1 className="pricing-text-2">20% Off</h1>
          </div>
          <div className="pricing-btn-parent">
            <Button className="button-1">Add to cart</Button>
            <Button className="button-2">Buy Now</Button>
          </div>
          <div className="course-section">
            <Paragraph type="secondary" className="second-blog-text ">
              This course includes:
            </Paragraph>
            <div className="course-includes">
              <p className="course-includes-prg">
                <img
                  src="/assets/images/play-circle-bold.png"
                  alt="user-profile-dropdown"
                />
                3 hours on-demand video
              </p>
              <p className="course-includes-prg">
                <img
                  src="/assets/images/infinity-bold.png"
                  alt="user-profile-dropdown"
                />
                Full lifetime access
              </p>
              <p className="course-includes-prg">
                {" "}
                <img
                  src="/assets/images/device-mobile-bold.png"
                  alt="user-profile-dropdown"
                />
                Access on mobile and TV
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
