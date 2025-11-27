"use client";
import { Tab, Tabs } from "react-bootstrap";
import RestaurantOverview from "../restaurant-overview/restaurant-overview";
import RestaurantSlider from "../restaurant-slider/restaurant-slider";

import styles from "./restaurant-tabs.module.css";
import RestaurantMenu from "../restaurant-menu/restaurant-menu";
const { detailsContainer, tabs } = styles;

const RestaurantTabs = () => {
  return (
    <div className={`${detailsContainer} mb-5`}>
      <Tabs defaultActiveKey="about" id="restaurant-tab" className={tabs} fill>
        <Tab eventKey="menu" title="Menu">
          <RestaurantMenu />
          <RestaurantMenu />
          <RestaurantMenu />
        </Tab>
        <Tab eventKey="images" title="Images">
          <RestaurantSlider />
        </Tab>
        <Tab eventKey="about" title="About">
          <RestaurantOverview />
        </Tab>
      </Tabs>
    </div>
  );
};

export default RestaurantTabs;
