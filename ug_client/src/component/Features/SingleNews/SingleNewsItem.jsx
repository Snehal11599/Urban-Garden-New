import React from 'react'
import LatestPost from '../../CommonComponent/LatestPost'
import LeaveComments from '../../CommonComponent/LeaveComments'
import NewsItem from '../../CommonComponent/NewsItem'
import { Row, Col } from "reactstrap";
import './SingleNewsItem.css'
import Tags from '../../CommonComponent/Tags'




const SingleNewsItem = () => {
    return (
        <>
            <div className='container' >
                <Row>
                    <Col style={{ width: "80rem" }}>
                        <img src="/assets/Singlenews/NewsItem.jpg" alt="Norway" style={{ height: "500px", width: "100%" }} />
                        {/* <div className="text-block" >
                            <h4>30</h4>
                            <h4>May</h4>
                        </div> */}
                        <h1>Person talking to each other</h1>
                        <p>Posted by Rome Doel!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="card mb-3" style={{ maxWidth: "600px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/assets/Singlenews/author.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5>Author:</h5>
                                        <h5 className="card-title">John Doel</h5>
                                        <p className="card-text">We are also create and designing template for categories Graphic template and Game asset. in March 2019, we have won big contest Envato most wanted
                                            for categories game assets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col >
                            <LatestPost/>
                            <NewsItem/>
                            <br></br>
                            <Tags />
                        </Col>
                   

                </Row>
                <LeaveComments />
            </div>

        </>
    )
}

export default SingleNewsItem