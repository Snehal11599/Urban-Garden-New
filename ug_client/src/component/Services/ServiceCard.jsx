import React, { useEffect, useState,useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"
const ServiceCard = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };
  const [service, setService] = useState([]);

  //function for get service card data
  const getService = async () => {
    const response = await fetch("http://localhost:3001/service");
    setService(await response.json());
    console.log(response);
  };

  useEffect(() => {
    getService();
  }, []);
  

  return (
    <div >
      <div className="" style={{justifyContent:"space-between",display:"flex",cursor:"pointer"}}
      onClick={() => sliderRef.current.slickPrev()}
      >
        <div className=""><ArrowBackIos/></div>
        <div className=""onClick={() => sliderRef.current.slickNext()}><ArrowForwardIos/></div>
      </div>
    <Slider ref={sliderRef} {...settings}>
        
        {
          service.map((service) => {
            return (
             
                <div className="col" >
                  <div className="card h-100"style={{width:"25rem",margin:"30"}}>
                    <img src={service.urltoimage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.decription}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
            
            );
          })}
          </Slider>
         
      </div>
  
  );
};

export default ServiceCard;
