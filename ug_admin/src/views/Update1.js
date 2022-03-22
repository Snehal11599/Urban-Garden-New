import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
const Update1 = () => {
    const { id } = useParams();
    const history = useHistory();
    const [service, setService] = useState({
        id:"",
        name:"",
        author:"",
        title:"",
        desp:"",
        url:"",
        urlToImage:"",
    publishedAt:"",
    content:"",
    });
    useEffect(() => {
     async function getService() {
      try {
        const service = await axios.get(`http://localhost:3000/articles/${id}`)
       console.log(service.data);
       setService(service.data);
      } catch (error) {
       console.log("Something is Wrong");
      }
     }
     getService();
    }, [id]);
   
    function onTextFieldChange(e) {
     setService({
      ...service,
      [e.target.name]: e.target.value
     })
    }
   
    async function onFormSubmit(e) {
     e.preventDefault()
     try {
      await axios.put(`http://localhost:3000/articles/${id}`, service)
      
     } catch (error) {
      console.log("Something is Wrong");
     }
    }
   
 
 return (
  <>
   <Box textAlign="center" p={2} mb={2}>
    
   </Box>
   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} mb={2}>
      <Typography variant="h4">Update Articles</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="Id" value={id} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Name" value={service.name} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="author" name="author" variant="outlined" required fullWidth id="author" label="Author" value={service.author} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="title" name="title" variant="outlined" required fullWidth id="title" label="Title" value={service.title} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="decription" name="decription" variant="outlined" required fullWidth id="decription" label="Decription" value={service.decription} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="url" name="url" variant="outlined" required fullWidth id="url" label="URl" value={service.url} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="urlToImage" name="urlToImage" variant="outlined" required fullWidth id="UrlToImage" label="urlToImage" value={service.urlToImage} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="publishedAt" name="publishedAt" variant="outlined" required fullWidth id="publishedAt" label="PublisheAt" value={service.publishedAt} onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="content" name="content" variant="outlined" required fullWidth id="content" label="Content" value={service.content} onChange={e => onTextFieldChange(e)}  />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)} >Update</Button>
      </Box>
     </form>
    </Grid>

    <Grid item md={6} xs={12}>
     
    </Grid>
   </Grid>
  </>
 )
}

export default Update1
