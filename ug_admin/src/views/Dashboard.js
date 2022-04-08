import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core"
import Gallery5 from "../assets/Gallery/gallery-6.jpg";
function Dashboard() {
  return (
    <>
    <div className="content">
         <div className="card bg-dark text-white" >
            <h1>Hello Admin </h1>
            <h3>You Are The Great Worker </h3>
              <p>
            <h4 className="container">
              God Almighty first planted a garden. And indeed, it is the purest of human pleasures.
            </h4>
            
            <Link to='ReceiveQuote'>
            <Button variant="contained"
               color="secondary">
               Quote Table
            </Button>
         </Link>

             </p>
           <img src={Gallery5} style={{height:"800px",width:"200%" }} className="card-img" alt="..." />
           </div>
      </div>
    </>
  );
}

export default Dashboard;
