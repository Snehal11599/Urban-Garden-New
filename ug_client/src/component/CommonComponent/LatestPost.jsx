import React from 'react'
import { NavLink } from 'react-router-dom'
const style={
    marginLeft:"3rem",
    display: "block",
    padding: "15px 20px",
    marginBottom: "5px",
    backgroundColor: "#8bc34a",
    width:"30rem"
}
const LatestPost = () => {
    return (
        <div className="d-grid gap-2 col-6 text-white">
            <ul>
                <button  className="btn"  style={style}>
                    <NavLink className="black" to="/">Landscape Design</NavLink>
                </button>
                <button type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="black" to="/">Planting and Removal</NavLink>
                </button>
                <button md="8" type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="black" to="/">Garden Care</NavLink>
                </button>
                <button type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="black" to="/">Irrigation and Drainage</NavLink>
                </button>
                <button type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="black" to="/">Stone and Hardscaping</NavLink>
                </button>
            </ul>
        </div>
    )
}

export default LatestPost