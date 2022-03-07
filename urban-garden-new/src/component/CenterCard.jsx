import React from 'react'
import { FaGlobeAmericas, FaBahai, FaThumbsUp, FaStar } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";


const style = {
    color: "#82B440", position: "center", keyboard: "focusable"
}
const CenterCard = () => {

    return (
        <div className="section-heading text-center mb-4" style={{ margin: "70px", padding: "20px", font: "serif" }}>
            <h1>Why Choose Us? </h1>
            <GiThreeLeaves size="3rem" style={style} />
            <div className="subheading text-center mb-5" style={{ font: "serif", size: "16px" }}>
                <p>Every case is very important to us and we always take care of them seriously.</p>
                <div className="row row-cols-1 row-cols-md-4 g-4 " style={{ margin: "75px" }}>
                    <div className="col">
                        <div className="card">
                            <FaThumbsUp size="3rem" style={style} />

                            <div className="card-body">
                                <h5 className="card-title">Affordabel Pricing</h5>
                                <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <FaGlobeAmericas size="3rem" style={style} />
                            <div className="card-body">
                                <h5 className="card-title">The Best in Pekanbaru</h5>
                                <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <FaBahai size="3rem" style={style} />
                            <div className="card-body">
                                <h5 className="card-title">Certified Expert</h5>
                                <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <FaStar size="3rem" style={style} />
                            <div className="card-body">
                                <h5 className="card-title">High Quality Services</h5>
                                <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterCard