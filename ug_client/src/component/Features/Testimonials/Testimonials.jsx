import React from 'react'
import Banner from '../../CommonComponent/Banner'
import { Row, Col } from "reactstrap";

const Testimonials = () => {
  return (
    <>
    <Banner title="Testimonials" />
    <Row>
      <Col>
    
      <div className="card mb-3" style={{ width: "540px",marginLeft: '10rem'  }}>
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
      <div className="card mb-3" style={{ width: "540px",marginLeft: '10rem'  }}>
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
      </Col>
      <Col>
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
      </Col>
    </Row>
    </>
  )
}
export default Testimonials