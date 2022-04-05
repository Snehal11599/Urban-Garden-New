import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import News from "./News";

const UpdateNews = () => {
  const { id } = useParams();

  const [service, setService] = useState({
    id: "",
    author: "",
    title: "",
    desp: "",
    urlToImage: "",
    publishedAt: "",
  });
  useEffect(() => {
    async function getService() {
      try {
        const service1 = await axios.get(`http://localhost:3001/articles/${id}`)
        console.log(service1.data);
        setService(service1.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getService();
  }, [id]);
  const [status, setStatus] = useState();
  function onTextFieldChange(e) {
    setService({
      ...service,
      [e.target.name]: e.target.value
    })
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/articles/${id}`, service)
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return<News/>
  }

  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4">Update News</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="Id" value={id} disabled
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
                <TextField autoComplete="decription" name="desp" variant="outlined" required fullWidth id="decription" label="Decription" value={service.desp} onChange={e => onTextFieldChange(e)}
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

export default UpdateNews
