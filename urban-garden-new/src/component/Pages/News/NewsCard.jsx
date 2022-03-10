import React, { useEffect, useState } from 'react'


const NewsCard = () => {
    const [posts, setPosts] = useState([])


    const getPost = async () => {
        const response = await fetch('http://localhost:3001/articles')
        setPosts(await response.json());
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div>
            <div className="card" style={{ width: "50rem" }}>
                {
                    posts.map(post => {
                        return <div>
                            <img src={post.urlToImage} className="card-img-top" alt="..." />
                            <h3 className="card-title">{post.title}</h3>
                            <p className="card-text">{post.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    }
                    )}
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