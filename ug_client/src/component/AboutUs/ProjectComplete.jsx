import React from 'react'
import { FaThumbsUp,FaCoffee } from "react-icons/fa";
import { BsFillBagFill,BsFillPeopleFill } from "react-icons/bs";
import Card from '../CommonComponent/Card'
export default function ProjectComplete() {
  return (
    <><div class="card bg-dark text-white" style={{margin:"40px 0px 40px 0px" }}>
  <img class="card-img" src="./assets/about/background.jpg" alt=""    style={{ height: "450px", width: "100%" }}/>
  <div class="card-img-overlay ">
<div
      className="section-heading text-center mb-4"
      style={{ margin: "70px", padding: "50px", font: "serif" }}
    >
    <div
        className="subheading text-center mb-5"
        style={{ font: "serif", size: "16px", paddingTop: "20px" }}
      >
       <div
          className="row row-cols-1 row-cols-md-4 g-4 "
          style={{ padding: "15px" }}
        >
          <Card
            icon={BsFillBagFill}
            title="2120"
            text="PROJECT COMPLETE"
          />
          <Card
            icon={FaThumbsUp}
            title="312"
            text="HAPPY COSTUMER"
          />
          <Card
            icon={FaCoffee}
            title="521"
            text="CUP OF COFFEE"
          />
          <Card
            icon={BsFillPeopleFill}
            title="225"
            text="EMPLOYER"
          />
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
