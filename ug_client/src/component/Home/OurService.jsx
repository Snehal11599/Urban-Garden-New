import React from "react";



const OurService = () => {
  return (
    <div
      className="section-heading text-center mb-4"
      style={{ margin: "70px", padding: "50px", font: "serif" }}
    >
      <h1> Our Services </h1>
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
          style={{ padding: "30px" }}
        >
          
          
         
          
        </div>
      </div>


      <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="./assets/Home/LandScape Design.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h3 className="card-title">Landscape Design</h3>
      <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="./assets/Home/Planting and removeal.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h3 className="card-title">Planting & Removal</h3>
      <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="./assets/Home/Garden Care.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h3 className="card-title">Garden Care</h3>
      <p className="card-text">TDolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod</p>
      
    </div>
  </div>
</div>
    </div>

    
  );
};

export default OurService;
