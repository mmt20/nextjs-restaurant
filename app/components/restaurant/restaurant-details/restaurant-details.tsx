"use client";
import { Tab, Tabs } from "react-bootstrap";
import RestaurantOverview from "../restaurant-overview/restaurant-overview";

import styles from "./restaurant-details.module.css";
const { detailsContainer, tabs } = styles;

const RestaurantDetails = () => {
  return (
    <div className={`${detailsContainer} mb-5`}>
      <Tabs defaultActiveKey="about" id="restaurant-tab" className={tabs} fill>
        <Tab eventKey="menu" title="Menu">
          Menu Content
        </Tab>
        <Tab eventKey="images" title="Images">
          Images Content
        </Tab>
        <Tab eventKey="about" title="About">
          <RestaurantOverview />
        </Tab>
      </Tabs>
    </div>
  );
};

export default RestaurantDetails;
