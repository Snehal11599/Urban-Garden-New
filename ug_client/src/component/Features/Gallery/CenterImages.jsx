import React from 'react'
import Slider from "react-slick";

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div>
            <Slider {...settings}>
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
                </Slider>
            </div>



    
    )
}

export default Gallery