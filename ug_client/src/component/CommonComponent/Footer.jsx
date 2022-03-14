import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="card bg-dark text-white"
        style={{ margin: "450px 0px 0px 0px" }}
      >
        <img
          src="/assets/HomeImages/background.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h1
            className="card-title"
            style={{ color: "#82B440", font: "serif" }}
          >
            Have Problem with your Gardening?
          </h1>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            rerum asperiores dolorum voluptates, assumenda totam magnam
            voluptas, itaque eos nulla adipisci quisquam, placeat praesentium
            animi at ex quos alias dignissimos!
          </p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-success text-white">
              CONTACT NOW
            </button>
          </div>
          <div className="col-md-4">
            <img
              src="/assets/HomeImages/bg1.png"
              className="img-fluid rounded-start "
              style={{ margin: "1px 500px 1px 800px", height: "100%" }}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
