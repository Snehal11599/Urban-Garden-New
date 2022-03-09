import React from 'react'


const NewsItem = () => {
    return (
        <div>
            <div className="card" style={{ width: "50rem" }}>
                <div className="row mb-3">
                    <h4 className="card-title">Conatct Info</h4>
                    <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted">Address:   99 Park Jomblo Street, Panam, Pekanbaru 28292, Riau</h6>
                    </div>
                    <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted">Office:     (123) 65412309</h6>
                    </div>
                    <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted">Fax:      (123) 65412309</h6>
                    </div>
                    <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted">Email:    info@yoursite.com</h6>
                    </div>
                </div>
            </div> <br></br>


            <div className="card" style={{ width: "50rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Download Brochure</h4>
                    <p className="card-text">Nam efficitur orci quis leo tincidunt, ac lacinia purus aliquet. Nam pellentesque pretium nibh cursus diam dapibus a..</p>
                    <button type="button" className="btn btn-primary btn-lg">Download Now</button>
                </div>
            </div><br></br>

            <div className="card" style={{ width: "50rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Text Widget</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Gaco is responsive multi-purpose HTML5 template compatible with Bootstrap 4. Take your Startup business website to the next level. It is designed for Landscaping, Gardening & Lawn Business. or any type of person or business who wants to showcase their work, services and professional way.</h6>
                    <p className="card-text">Nam efficitur orci quis leo tincidunt, ac lacinia purus aliquet. Nam pellentesque pretium nibh cursus diam dapibus a..</p>
                </div>
            </div><br></br>

            <div className="card" style={{ width: "50rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Archive</h4>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Year
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><a className="dropdown-item active" to="/">March 2017</a></li>
                            <li><a className="dropdown-item" to="/">Febuary 2017</a></li>
                            <li><a className="dropdown-item" to="/">January 2017 </a></li>
                            <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsItem