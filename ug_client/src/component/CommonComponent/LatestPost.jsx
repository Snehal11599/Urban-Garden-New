import React from 'react'
import { NavLink } from 'react-router-dom'
const style={
    color:" #222222",
    display: "block",
    padding: "15px 20px",
    marginBottom: "5px",
    backgroundColor: "#f2f2f2",
    width:"100%"
}
const LatestPost = () => {
    return (
        <div className='d-grid gap-2 col-6 mx-auto'>
            <ul>
                <button type="button"  className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="nav-link" to="/">Landscape Design</NavLink>
                </button>
                <button type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="nav-link" to="/">Planting and Removal</NavLink>
                </button>
                <button md="8" type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="nav-link" to="/">Garden Care</NavLink>
                </button>
                <button type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="nav-link" to="/">Irrigation and Drainage</NavLink>
                </button>
                <button type="button" className="btn btn-outline-success text-white btn-sm" style={style}>
                    <NavLink className="nav-link" to="/">Stone and Hardscaping</NavLink>
                </button>
            </ul>
        </div>
    )
}

export default LatestPost