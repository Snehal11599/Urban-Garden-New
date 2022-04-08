import React from 'react'
import { NavLink } from 'react-router-dom'

const Tags = () => {
    return (
        <div className="card" style={{ marginLeft:"3rem"}} >
                <div className="card-body">
                    <h4 className="card-title">Tags</h4>
                    
                
            <ul className="nav nav-tabs">
                <li>
                <NavLink className="nav-link" to="/">business</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/">advocate</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/">attorney</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/">attorney</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/">attorney</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/">attorney</NavLink>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Tags