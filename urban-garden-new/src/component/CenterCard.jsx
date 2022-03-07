import React from 'react'




const CenterCard = () => {
    return (
        <div className='container'>
            <h1>Why Choose Us?</h1>
            <img src="/assets/HomeImages/icon.png" alt='..' />
            <h3>Every case is very important to us and we always take care of them seriously.</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 " style={{ margin: "75px" }}>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Affordabel Pricing</h5>
                            <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Best in Pekanbaru</h5>
                            <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Certified Expert</h5>
                            <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">High Quality Services</h5>
                            <p className="card-text">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CenterCard