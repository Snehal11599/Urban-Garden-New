import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip,Button } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

const Service = () => {
   const [service, setService] = useState([]);

   useEffect(() => {
      async function getService() {
         try {
            const service = await axios.get("http://localhost:3001/service")

            setService(service.data);
         } catch (error) {
            console.log("Something is Wrong");
         }
      }
      getService();
   }, [])

   //delete service data
   const handleDelete = async id => {
      await axios.delete(`http://localhost:3001/service/${id}`);
      var newservice = service.filter((item) => {
         return item.id !== id;
      })
      setService(newservice);
   }

   return (
      <div className="content">
          <Link to='AddService'>
            <Button variant="contained"
               color="secondary">
               Create Service
            </Button>
         </Link>
         <Row>
            <Col md="20">

               <TableContainer component={Paper}>
                  <Table>
                     <TableHead>
                        <TableRow style={{ backgroundColor: "#3f51b5" }}>
                           <TableCell align="center" >Id</TableCell>
                           <TableCell align="center" >Title</TableCell>
                           <TableCell align="center" >Description</TableCell>
                           <TableCell align="center" >Image</TableCell>
                           <TableCell align="center" >Action</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {service.map((service, i) => {
                           return (
                              <TableRow key={i}>
                                 <TableCell align="center">{i + 1}</TableCell>
                                 <TableCell align="center">{service.title}</TableCell>
                                 <TableCell align="center">{service.decription}</TableCell>
                                 <TableCell align="center">{service.urltoimage}</TableCell>
                                 <TableCell align="center">
                                    <Tooltip title="Edit">
                                       <IconButton><Link to={`Update/${service.id}`}><EditIcon /></Link></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                       <IconButton onClick={() => handleDelete(service.id)} ><DeleteIcon color="secondary" /></IconButton>
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

export default Service






