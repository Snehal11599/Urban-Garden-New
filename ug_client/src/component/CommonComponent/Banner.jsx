import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Img(props) {
  return (
    
      <>
   
      <div className="card bg-dark text-white" style={{margin:"40px 0px 40px 0px" }}>
        <img src="./assets/service/garden.webp" style={{ height: "300px", width: "100%" }} className="card-img" alt="..." />
        <div className="card-img-overlay">
          
          <h1 className="card-title "  style={{ color: "#82B440", font: "Merriweather serif" }} >{props.title}</h1>
          <ul>
          <li className="nav-item py-md-2"style={{backgroundtColor:"#8BAD21"}}>
            <NavLink className="nav-link text-light"  aria-current="page" to="/">Home / {props.title}</NavLink> 
          </li>
          </ul>
        </div>
      </div>
    </>

  )
}
