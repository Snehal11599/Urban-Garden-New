import React from 'react'
import { NavLink } from 'react-router-dom'

const Tags = () => {
    return (
        <div>
            <h1>Tags</h1>
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
    )
}

export default Tags