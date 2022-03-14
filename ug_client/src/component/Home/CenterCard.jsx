import React from "react";
import { FaGlobeAmericas, FaBahai, FaThumbsUp, FaStar } from "react-icons/fa";
import Card from "../CommonComponent/Card";

const CenterCard = () => {
  return (
    <div
      className="section-heading text-center mb-4"
      style={{ margin: "70px", padding: "50px", font: "serif" }}
    >
      <h1> Why Choose Us? </h1>
      <img src="/assets/HomeImages/decor.png" alt="icon" />
      <div
        className="subheading text-center mb-5"
        style={{ font: "serif", size: "16px", paddingTop: "20px" }}
      >
        <p>
          Every case is very important to us and we always take care of them
          seriously.
        </p>
        <div
          className="row row-cols-1 row-cols-md-4 g-4 "
          style={{ padding: "75px" }}
        >
          <Card
            icon={FaThumbsUp}
            title="Affordable Pricing"
            text="Dolor sit amet dolor gravida placerat liberolorem ipsum dolor
                  consectetur adipiscing elit, sed do eiusmod."
          />
          <Card
            icon={FaGlobeAmericas}
            title="The Best in Pekanbaru"
            text="Dolor sit amet dolor gravida placerat liberolorem ipsum dolor
                  consectetur adipiscing elit, sed do eiusmod."
          />
          <Card
            icon={FaBahai}
            title="Certified Expert"
            text="Dolor sit amet dolor gravida placerat liberolorem ipsum dolor
                  consectetur adipiscing elit, sed do eiusmod."
          />
          <Card
            icon={FaStar}
            title="High Quality Services"
            text="Dolor sit amet dolor gravida placerat liberolorem ipsum dolor
                  consectetur adipiscing elit, sed do eiusmod."
          />
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
