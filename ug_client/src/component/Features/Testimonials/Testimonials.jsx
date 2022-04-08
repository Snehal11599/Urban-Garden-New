import React from 'react'
import Banner from '../../CommonComponent/Banner'

const Testimonials = () => {
  return (
    <div>
      <Banner title="Testimonials" />


      <div className="section-heading text-center mb-2"
      style={{ margin: "70px", padding: "5px", font: "serif" }}> 
      <h1>Meet our Review Board members and learn more about our process </h1>
      <div
        className="subheading text-center mb-2"
        style={{ font: "serif", color: "#82B440", size: "16px", paddingTop: "5px" }} >
        <h4>
         _____Members _____
        </h4>
        </div>
      </div>


      <div className="card mb-3" style={{ width: "540px" }}>
       
       
       
       
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/assets/Testimonials/team-img1.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">-JOHN DOEL</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>


      
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/assets/Testimonials/team-img2.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">-RAISA DOEL</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/assets/Testimonials/team-img3.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">-JOSH DOEL</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/assets/Testimonials/team-img4.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">-SASHA DOEL</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials