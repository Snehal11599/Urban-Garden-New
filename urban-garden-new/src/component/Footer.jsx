import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="card bg-dark text-white" style={{ marginTop: "100px" }}>
                <img src="/assets/HomeImages/background.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h1 className="card-title">Have Problem with your Gardening?</h1>
                    <div md="3">
                    <p className="card-text">Lorem ipsum dolor, sit amet
                     consectetur adipisicing elit. Dolores rerum
                        asperiores dolorum voluptates, assumenda
                         totam magnam voluptas, itaque eos nulla 
                         adipisci quisquam,
                        placeat praesentium animi at ex quos alias dignissimos!</p>
                        </div>
                    <div className='d-grid gap-2 col-3 mx-auto'>
                        <button className="btn btn-outline-success text-white">CONTACT NOW</button>
                    </div>
                    <div className="col-md-20">
                        <img src="/assets/HomeImages/bg1.png" className="img-fluid rounded-start " style={{ float: "right-top" }} alt class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer; 