import React from 'react'

function OurLatestBlog() {
  return (
    <div
      className="section-heading text-center mb-4"
      style={{ margin: "70px", padding: "50px", font: "serif" }}
    >
      <h1> OUR LATEST BLOG </h1>
      <img src="/assets/HomeImages/decor.png" alt="icon" />
      <div
        className="subheading text-center mb-5"
        style={{ font: "serif", size: "16px", paddingTop: "20px" }}
      >
        <p>
        Start growing with Gaco Html Template
        </p>
        <div
          className="row row-cols-1 row-cols-md-4 g-4 "
          style={{ padding: "30px" }}
        >
           </div>
      </div>
 <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="./assets/Home/LatestBlog/person talking to each other.jpg" alt="Card  cap"/>
    <div className="card-body">
      <h3 className="card-title">Why you have difficult to clean your lawn</h3>
      <p className="card-text">We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="./assets/Home/LatestBlog/news-img-2.jpg" alt="Card  cap"/>
    <div className="card-body">
      <h3 className="card-title">We Open Recritment for LandScaping</h3>
      <p className="card-text">We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
      
    </div>
  </div>
 
</div>
    </div>
  )
}

export default OurLatestBlog