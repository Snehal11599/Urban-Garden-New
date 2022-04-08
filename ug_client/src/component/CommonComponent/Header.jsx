import React from 'react';
import { BsFillTelephoneFill,BsFillClockFill,BsFillGeoAltFill,BsInstagram,BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs';
import { Row, Col } from "reactstrap";
export default function Header() {
  return (
    <>
    <div className="card bg-dark text-white" >
    <img src="./assets/service/fainta.jpg" style={{ height: "50px", width: "90%" }} className="card-img" alt="..." />
    <div className="container-fluid">
        <img
          src="assets/service/envatomarket.png"
          alt="logo"  
          style={{ paddingLeft: "10px" }}
        />
        </div>
        <div className="card-img2">
         <Row > 
            <Col md="2" >
                <BsFillTelephoneFill/>
                +62 7144 3300
            </Col>
            <Col md="2">
                <BsFillClockFill/>
                Mon - Sat : 08:00 - 17:00
            </Col>
            <Col >
                <BsFillGeoAltFill/>
                99 Park Jomblo, Pekanbaru
            </Col>
            <Col>
                <BsInstagram/>
            </Col>
            <Col>
              <BsTwitter/>
            </Col>
            <Col>
                <BsFacebook/>
            </Col>
            <Col>
                <BsLinkedin/>
            </Col>
         </Row>
         
    
      </div>
    
    </div>
    </>
  )
}
