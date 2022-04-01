import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
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

   //delete  data
   const handleDelete = async id => {
      await axios.delete(`http://localhost:3001/Quotation/${id}`);
      var newquote = quote.filter((item) => {
         return item.id !== id;
      })
      setquote(newquote);
   }

   return (
      <div className="content">
         <Row>
            <Col md="20">
               <h5 className="card-title">Hello Admin...</h5>
               <TableContainer component={Paper}>
                  <Table>
                     <TableHead>
                        <TableRow style={{ backgroundColor: "#3f51b5" }}>
                           <TableCell align="center" >Order No</TableCell>
                           <TableCell align="center" >Name</TableCell>
                           <TableCell align="center" >Email</TableCell>
                           <TableCell align="center">Gardening Address</TableCell>
                           <TableCell align="center" >Gardening Area</TableCell>
                           <TableCell align="center" >Gardening Images</TableCell>
                           <TableCell align="center" >Work Description</TableCell>
                           <TableCell align="center" >Action</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {quote.map((quote, i) => {
                           return (
                              <TableRow key={i}>
                                 <TableCell align="center">{quote.id}</TableCell>
                                 <TableCell align="center">{quote.name}</TableCell>
                                 <TableCell align="center">{quote.email}</TableCell>
                                 <TableCell align="center">{quote.GardeningAddress}</TableCell>
                                 <TableCell align="center">{quote.GardeningArea}</TableCell>
                                 <TableCell align="center">{quote.GardenImages}</TableCell>
                                 <TableCell align="center">{quote.WorkDescription}</TableCell>
                                 <TableCell align="center">
                                    <Tooltip title="Edit">
                                       <IconButton><Link to={`EditQuote/${quote.id}`}><EditIcon /></Link></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                       <IconButton onClick={() => handleDelete(quote.id)} ><DeleteIcon color="secondary" /></IconButton>
                                    </Tooltip>
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






