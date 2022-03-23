import React from 'react'

function OurPricingPlan() {
  return (
    <div
      className="section-heading text-center mb-4"
      style={{ margin: "70px", padding: "50px", font: "serif" }}
    >
      <h1> Our Pricing Plans </h1>
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
    
    <div className="card-body">
      <h3 className="card-title">BASIC PLAN</h3>
      <h4>$20</h4><h5>/month</h5>
      <p className="card-text">Consectetuer adipiscing</p>
      <p className="card-text">Dolor sit amet</p>
      <p className="card-text">Sed diam nonummy</p>
      <p className="card-text">Nibh euismod tincidunt</p>
      <p className="card-text">Ut laoreet dolore</p>
      <p className="card-text">1 Day Finish</p>
      
    </div>
  </div>
  <div className="card">
   
    <div className="card-body">
      <h3 className="card-title">SILVER PLAN</h3>
      <h4>$40</h4><h5>/month</h5>
      <p className="card-text">Consectetuer adipiscing</p>
      <p className="card-text">Dolor sit amet</p>
      <p className="card-text">Sed diam nonummy</p>
      <p className="card-text">Nibh euismod tincidunt</p>
      <p className="card-text">Ut laoreet dolore</p>
      <p className="card-text">1 Day Finish</p>
      
    </div>
  </div>

  <div className="card">
   
    <div className="card-body">
      <h3 className="card-title">GOLD PLAN</h3>
      <h4>$80</h4><h5>/month</h5>
      <p className="card-text">Consectetuer adipiscing</p>
      <p className="card-text">Dolor sit amet</p>
      <p className="card-text">Sed diam nonummy</p>
      <p className="card-text">Nibh euismod tincidunt</p>
      <p className="card-text">Ut laoreet dolore</p>
      <p className="card-text">1 Day Finish</p>

    </div>
  </div>
 
</div>
    </div>
  )
}

export default OurPricingPlan