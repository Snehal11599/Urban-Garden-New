import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
const ReceiveQuote = () => {
   const [quote, setquote] = useState([]);

   useEffect(() => {
      async function getquote() {
         try {
            const quote = await axios.get("http://localhost:3001/Quotation")
            setquote(quote.data);
         } catch (error) {
            console.log("Something is Wrong");
         }
      }
      getquote();
   }, [])

   return (
      <div className="content">
         <Row>
            <Col md="20">
               <h5 className="card-title"> Hello User </h5>
               <NavLink to="/AddQuotes">
                  <button className="btn btn-success text-white" >  Submit Quote </button>
               </NavLink>
               <TableContainer component={Paper}>
                  <Table>
                     <TableHead>
                        <TableRow style={{ backgroundColor: "#8bc34a" }}>
                           <TableCell align="center" >Name</TableCell>
                           <TableCell align="center">Gardening Address</TableCell>
                           <TableCell align="center" >Gardening Area</TableCell>
                           <TableCell align="center" >Gardening Images</TableCell>
                           <TableCell align="center" >Work Description</TableCell>
                           <TableCell align="center" >Quote Amount</TableCell>
                           {/* <TableCell align="center" >Action</TableCell> */}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {quote.map((quote, i) => {
                           return (
                              <TableRow key={i}>
                                 <TableCell align="center">{quote.name}</TableCell>
                                 <TableCell align="center">{quote.GardeningAddress}</TableCell>
                                 <TableCell align="center">{quote.GardeningArea}</TableCell>
                                 <TableCell align="center">{quote.GardenImages}</TableCell>
                                 <TableCell align="center">{quote.WorkDescription}</TableCell>
                                 <TableCell align="center">{quote.QuoteAmount}</TableCell>
                                 <TableCell align="center">
                                 </TableCell>
                              </TableRow>
                           )
                        })
                        }
                     </TableBody>
                  </Table>
               </TableContainer>
            </Col>
         </Row>
      </div>
   )
}

export default ReceiveQuote






