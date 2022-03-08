import React from 'react'

const Gallery = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/tunnel.jpg" alt="Lights" style={{ width: "100%" }} />


                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-2.jpg" alt="Nature" style={{ width: "100%" }} />


                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-3.jpg" alt="Fjords" style={{ width: "100%" }} />

                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-4.jpg" alt="Fjords" style={{ width: "100%" }} />

                    </div>
                </div>

                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-5.jpg" alt="Fjords" style={{ width: "100%" }} />
                    </div>
                </div>

                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-6.jpg" alt="Fjords" style={{ width: "100%" }} />
                    </div>
                </div>

                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-7.jpg" alt="Fjords" style={{ width: "100%" }} />
                    </div>
                </div>

                <div className="col">
                    <div className="thumbnail">
                        <img src="/assets/Gallery/gallery-8.jpg" alt="Fjords" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Gallery