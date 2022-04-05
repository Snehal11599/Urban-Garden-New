import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Tooltip, IconButton, Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Row, Col } from "reactstrap";

const Article = () => {
   const [article, setarticle] = useState([]);
   useEffect(() => {
      async function getarticle() {
         try {
            const article = await axios.get("http://localhost:3001/articles")
            console.log(article);
            setarticle(article.data);
         } catch (error) {
            console.log("Something is Wrong");
         }
      }
      getarticle();
   }, [])
   const handleDelete = async id => {
      await axios.delete(`http://localhost:3001/articles/${id}`);
      var newarticle = article.filter((item) => {
         return item.id !== id;
      })
      setarticle(newarticle);
   }
   return (
      <div className="content">

         <Link to='AddNews'>
            <Button variant="contained"
               color="primary">
               Create News
            </Button>
         </Link>
         <Row>
            <Col md="20">
               <TableContainer component={Paper}>
                  <Table>
                     <TableHead>
                        <TableRow style={{ backgroundColor: "#616161" }}>
                           <TableCell align="center" >Id</TableCell>
                           <TableCell align="center" >Author</TableCell>
                           <TableCell align="center" >Title</TableCell>
                           <TableCell align="center" >Description</TableCell>
                           <TableCell align="center" >UrlTOImage</TableCell>
                           <TableCell align="center" >PublishedAt</TableCell>
                           <TableCell align="center" >Action</TableCell>

                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {
                           article.map((article, i) => {
                              return (
                                 <TableRow key={i}>
                                    <TableCell align="center">{i + 1}</TableCell>
                                    <TableCell align="center">{article.author}</TableCell>
                                    <TableCell align="center">{article.title}</TableCell>
                                    <TableCell align="center">{article.desp}</TableCell>
                                    <TableCell align="center">{article.urlToImage}</TableCell>
                                    <TableCell align="center">{article.publishedAt}</TableCell>
                                    <TableCell align="center">
                                       <Tooltip title="Edit">
                                          <IconButton><Link to={`UpdateNews/${article.id}`}><EditIcon /></Link></IconButton>
                                       </Tooltip>
                                       <Tooltip title="Delete">
                                          <IconButton onClick={() => handleDelete(article.id)} ><DeleteIcon color="secondary" /></IconButton>
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

export default Article
