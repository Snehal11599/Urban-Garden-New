import React, { useEffect, useState } from "react";

const ServiceCard = () => {
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
    <div>
       <div className="section-heading text-center mb-2"
      style={{ margin: "70px", padding: "5px", font: "serif" }}> 
      <h1>Complete Garden Solutions </h1>
      <div
        className="subheading text-center mb-2"
        style={{ font: "serif", color: "#82B440", size: "16px", paddingTop: "5px" }} >
        <h4>
         _____Services _____
        </h4>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        
        {
          service.map((service) => {
            return (
              <div >
                <div className="col">
                  <div className="card h-100">
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
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServiceCard;
