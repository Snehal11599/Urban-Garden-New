import React from 'react'

function RecentProject() {
  return (
    <div 
      className="section-heading text-center mb-4"
      style={{ margin: "70px", padding: "50px", font: "serif" ,backgroundImage:"url('/assets/Home/RecentProject/BlankBackGround.jpg')"}}
       >
    <h2  className="section heading bootstrap text center text-white mb-4> Recent Project">Recent Project </h2>
      <img src="/assets/HomeImages/decor.png" alt="icon" />
      <div
        className="subheading text-center mb-5"
        style={{ font: "serif", size: "16px", paddingTop: "20px" }}
      >
        <h5 className='subheading text-center text-white mb-5'>
        Start growing with Gaco Html Template
        </h5>
        <div
          className="row row-cols-1 row-cols-md-4 g-4 "
          style={{ padding: "10px" }}
        >
    </div>
      </div>
    <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="./assets/Home/RecentProject/I1.jpg" alt="Card image cap"/>
    <div className="card-body">
      </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="./assets/Home/RecentProject/i2.jpg" alt="Card image cap"/>
    <div className="card-body">
  </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="./assets/Home/RecentProject/i3.jpg" alt="Card image cap"/>
    <div className="card-body">
  </div>
  </div>

  <div className="card">
    <img className="card-img-top" src="./assets/Home/RecentProject/i4.jpg" alt="Card image cap"/>
    <div className="card-body">
  </div>
  </div>
                <button className="btn btn-success text-white">
                  View More
                </button></div>

      
      
      
      </div>
  )
}

export default RecentProject