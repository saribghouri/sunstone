"use client";
import Paragraph from "@/components/Shared/Typography/paragraph";

import { Button, Card } from "antd";
import React, { useState } from "react";
import CommonHeader from "../header";

const Pages = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleChoosePlan = (index: any) => {
    setSelectedCard(index);
    console.log(index);
  };
  const cardData = [
    {
      title: "PRO version",
      price: "$9.9",
      duration: "/month",
      features: [
        "Single user license",
        "Component properties",
        "Interactive components",
        "Light & Dark theme",
        "30+ Page examples",
      ],
    },
    {
      title: "PRO version",
      price: "$9.9",
      duration: "/month",
      features: [
        "Single user license",
        "Component properties",
        "Interactive components",
        "Light & Dark theme",
        "30+ Page examples",
      ],
    },
    {
      title: "PRO version",
      price: "$9.9",
      duration: "/month",
      features: [
        "Single user license",
        "Component properties",
        "Interactive components",
        "Light & Dark theme",
        "30+ Page examples",
      ],
    },
  ];

  return (
    <div>
      <CommonHeader />
      <div className="pricing-content">
        <div className="top">
          <div className="top-first-side">
            <h1 className="pricing-hd">Choose Your Plan</h1>
            <Paragraph className="top-first-side-text" type="secondary">
              Simple pricing. No hidden fees. Advanced features for you
              business.
            </Paragraph>
          </div>
        </div>
        <div className="get-started-pricing-content">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`card ${
                selectedCard === index ? "selected-card" : ""
              }`}
            >
              <h2 className="pricing-content-hd">{card.title}</h2>
              <h2 className="pricing-content-hd2">
                {card.price} <span className="span">{card.duration}</span>
              </h2>

              <ul>
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <Button
                className="pricing-button"
                type="primary"
                onClick={() => handleChoosePlan(index)}
              >
                Choose Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pages;
