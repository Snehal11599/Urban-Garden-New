import React, { useEffect, useState } from 'react'
import LatestPost from '../../CommonComponent/LatestPost'
import { Row, Col } from "reactstrap";
import NewsItem from '../../CommonComponent/NewsItem'
import Tags from '../../CommonComponent/Tags'


const NewsCard = () => {
    const [posts, setPosts] = useState([])


    const getPost = async () => {
        const response = await fetch('http://localhost:3001/articles')
        setPosts(await response.json());
        console.log(response)
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <>
            <div className='container' >
                <Row>
                    <Col style={{ width: "50rem"}} >
                        <div className="card"  >
                            {
                                posts.map(post => {
                                    return <div>
                                        <img src={post.urlToImage} className="card-img-top" alt="..." />
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-text">{post.url}</p>
                                        <p className="card-text">{post.desp}</p>
                                        <p className="card-text">{post.content}</p>
                                        <p className="card-text">{post.publishedAt}</p>
                                        <a href="/" className="btn btn-primary"style={{  backgroundColor: "#82B440"}} >Go somewhere</a>
                                    </div>
                                }
                                )}
                        </div><br></br>
                        <div className="'col-xs-3 '" style={{ margin: "left:20 px" }}>
                            <button className="btn btn-outline-success text-black " style={{ marginRight: "20px" }}>Previous</button>
                            <button className="btn btn-outline-success text-black " style={{ marginRight: "20px", Color: "#82B440" }} type="button">1</button>
                            <button className="btn btn-outline-success text-black " style={{ marginRight: "20px" }} type="button">2</button>
                            <button className="btn btn-outline-success text-black " style={{ marginRight: "20px" }} type="button">3</button>
                            <button  className="btn btn-outline-success text-black ">Next</button>
                        </div>
                    </Col><br></br>
                    <Col style={{ width: "50rem" }} >

                        <LatestPost />
                        <NewsItem />
                        <br></br>
                        <Tags />

                    </Col>
                </Row>
            </div>

        </>
    )
}

export default NewsCard