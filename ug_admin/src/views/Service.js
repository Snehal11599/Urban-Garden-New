import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
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
    const service = await axios.get("http://localhost:3000/articles")
    
    setService(service.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getService();
 }, [])

 const handleDelete = async id => {
    await axios.delete(`http://localhost:3000/articles/${id}`);
    var newservice = service.filter((item) => {
     // console.log(item);
     return item.id !== id;
    })
    setService(newservice);
   }
  



 return (
    <div class="content">
    <Row>
      <Col md="20">
   
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" >Id</TableCell>
       <TableCell >Title</TableCell>
       <TableCell align="center" >Name</TableCell>
       <TableCell align="center" >Author</TableCell>
       <TableCell align="center" >Title</TableCell>
       <TableCell align="center" >desp</TableCell>
       <TableCell align="center" >URL</TableCell>
       <TableCell align="center" >urlTOImage</TableCell>
       <TableCell align="center" >publishedAt</TableCell>
       <TableCell align="center" >content</TableCell>
       <TableCell align="center" >Action</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       service.map((service, i) => {
        return (
         <TableRow key={i}>
          <TableCell align="center">{service.id}</TableCell>
          <TableCell align="center">{service.name}</TableCell>
          <TableCell align="center">{service.author}</TableCell>
          <TableCell align="center">{service.title}</TableCell>
          <TableCell align="center">{service.desp}</TableCell>
          <TableCell align="center">{service.url}</TableCell>
          <TableCell align="center">{service.urlToImage}</TableCell>
          <TableCell align="center">{service.publishedAt}</TableCell>
          <TableCell align="center">{service.content}</TableCell>
          <TableCell align="center">
           
           <Tooltip title="Edit">
            <IconButton><Link to ={`Update1/${service.id}`}><EditIcon /></Link></IconButton>
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
