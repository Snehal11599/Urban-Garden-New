import React from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/HomeImages/home01.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">


                        <div className=' gap-7 col-15 '>
                        <Col md="14">
                        
                        <button className="btn btn-outline-success text-white">The Best LandScaping In Pekanbaru</button>
                   </Col>
                       </div>

                            <h1>We Are Gaco LandScaping</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus unde labore sint cumque deserunt quae possimus placeat ut?</p>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <Row>
                                    <Col md="4">
                                <button className="btn btn-outline-success text-white">More About US</button>
                                </Col>
                                <Col md="4"> 
                                <button className="btn btn-outline-success text-white">Hire US Now</button>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/HomeImages/home02.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">


                        <div className=' gap-7 col-15 '>
                        <Col md="14">
                        
                        <button className="btn btn-outline-success text-white">The Best LandScaping In Pekanbaru</button>
                   </Col>
                       </div>
                            <h1>LandScaping and Gardening</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, est sequi rerum ve</p>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <Row>
                                    <Col md="4">
                                <button className="btn btn-outline-success text-white">More About US</button>
                                </Col>
                                <Col md="4"> 
                                <button className="btn btn-outline-success text-white">Hire US Now</button>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/HomeImages/home03.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">

                        <div className=' gap-9 col-20 '>
                        <Col md="14">
                        
                        <button className="btn btn-outline-success text-white">The Best LandScaping In Pekanbaru</button>
                   </Col>
                       </div>
                            <h1>High Quality And Guaranted</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit minima debitis fugit perspiciatis.</p>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <Row>
                                    <Col md="4">
                                <button className="btn btn-outline-success text-white">More About US</button>
                                </Col>
                                <Col md="4"> 
                                <button className="btn btn-outline-success text-white">Hire US Now</button>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel