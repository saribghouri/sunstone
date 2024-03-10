import { Button, Card, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React, { useEffect, useState } from "react";
import dataa from "../../shared/json/index.json";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { fetchAppList } from "../redux/features/appApi";
import { anaylatic } from "../redux/features/analytic";
import { unwrapResult } from "@reduxjs/toolkit";

const Analytics = () => {
  const dispatch: AppDispatch = useDispatch();
  const [analytic, setanalytic]: any = useState([]);
  console.log("highlights:", analytic);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchHighlightsList = async () => {
      try {
        const highlightData = await dispatch(anaylatic()).then(unwrapResult);
        console.log("Fetched highlightData:", highlightData);

        if (Array.isArray(highlightData)) {
          setanalytic(highlightData);
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

  const analytics = analytic;
  const analyticsData = dataa[0].analytics;
  return (
    <div>
      <div className="cards">
        <p className="card-heading">Application report glance</p>
        <Row gutter={16}>
          <Card className="card-child" bordered={false}>
            {analytics[2] ? <h1>{analytics[2].id}</h1> : <h1>Loading...</h1>}
            <p>{analyticsData.TotalRequests}</p>
          </Card>

          <Card className="card-child" bordered={false}>
            {analytics[3] ? <h1>{analytics[3].id}</h1> : <h1>Loading...</h1>}
            <p>{analyticsData.TotalUsers}</p>
          </Card>

          <Card className="card-child" bordered={false}>
            {analytics[1] ? <h1>{analytics[1].id}</h1> : <h1>Loading...</h1>}
            <p>{analyticsData.RecordedUserfeedback}</p>
          </Card>

          <Card className="card-child" bordered={false}>
            {analytics[0] ? <h1>{analytics[0].id}</h1> : <h1>Loading...</h1>}
            <p>{analyticsData.ModeratedRequests}</p>
          </Card>
        </Row>
      </div>
      <div className="moderation-matrics">
        <div className="get-started-text-content">
          <Paragraph type="secondary" className="get-started-text">
            Coming soon!
          </Paragraph>
          <h1 className="hd">Moderation Metrics</h1>
          <Paragraph className="moderation-prg" type="secondary">
            Regularly uniting the brightest from universities and
            institutions&apos; our Hackathons are a hub of inventive spirit.
            They&apos;re an arena where theoretical knowledge and cutting-edge
            research collide to create practical&apos; innovative applications.
            Join us to code&apos; create&apos; and change the future.
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
            <Paragraph className="bottom-first-side-text">
              We&apos;re flattered by the overwhelming interest! Initial spots
              are gone!<br></br> Missed the first cut? Fear not – secure your
              spot on our waitlist today to <br></br>be next in line.
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

export default Analytics;
