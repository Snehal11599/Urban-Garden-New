import React from 'react'


const NewsCard = () => {
    return (
        <div>
            <div className="card" style={{ width: "70rem" }}>
                <img src="/assets/News/news-img-1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">Why You Have Difficult To Clean Your Lawn</h3>
                    <p className="card-text">We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div><br></br>

            <div className="card" style={{ width: "70rem" }}>
                <img src="/assets/News/news-img-2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">We Open Recruitment For LandScaping</h3>
                    <p className="card-text">We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <br></br>

            <div className="card" style={{ width: "70rem" }}>
                <img src="/assets/News/news-img-3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">We Offer 30% Cashback For Flower Garden</h3>
                    <p className="card-text">We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                    <a to="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div><br></br>
            <div className="'col-xs-3'" style={{ margin: "left:30 px" }}>
                <button type="button" className="btn btn-primary btn-lg" style={{ marginRight: "20px" }}>Previous</button>
                <button className="btn btn-primary" style={{ marginRight: "20px" }} type="button">1</button>
                <button className="btn btn-primary" style={{ marginRight: "20px" }} type="button">2</button>
                <button className="btn btn-primary" style={{ marginRight: "20px" }} type="button">3</button>
                <button type="button" class="btn btn-primary btn-lg">Next</button>
            </div>
        </div>
    )
}

export default NewsCard