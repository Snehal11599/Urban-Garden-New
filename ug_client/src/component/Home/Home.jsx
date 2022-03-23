import React from "react";
import Carousel from "./Carousel";
import CenterCard from "./CenterCard";
import OurLatestBlog from "./OurLatestBlog";
import OurService from "./OurService";
import RecentProject from "./RecentProject";
export default function Home() {
  return (
    <div>
      <div>
        <Carousel />
        <CenterCard />
        
      </div>
      <OurService/>
      <RecentProject/>
      <OurLatestBlog/>
    </div>
  );
}
