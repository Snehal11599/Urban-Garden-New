import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, green } from '@material-ui/core/colors';
import axios from "axios";
import { useState } from "react";
import Service from "./Service";

const AddArticles = () => {
  const [service, setService] = useState({
    id: "",
    name: "",
    author: "",
    title: "",
    desp: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: ""
  });

  const [status, setStatus] = useState();
  function onTextFieldChange(e) {
    setService({
      ...service,
      [e.target.name]: e.target.value
    })
    console.log(service);
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:3000/articles`, service)
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <Service />

  }


  return (
    <>
      <Box textAlign="center" p={2} mb={2}>

      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4">Add Articles</Typography>
          </Box>
          <form noValidate>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="Id" onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="stuname" name="name" variant="outlined" required fullWidth id="name" label="Name" onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="author" variant="outlined" required fullWidth id="author" label="author" onChange={e => onTextFieldChange(e)} />
              </Grid>

              <Grid item xs={12}>
                <TextField autoComplete="email" name="title" variant="outlined" required fullWidth id="title" label="title" onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="desp" variant="outlined" required fullWidth id="desp" label="Description" onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="url" variant="outlined" required fullWidth id="url" label="url" onChange={e => onTextFieldChange(e)} />
              </Grid>



              <Grid item xs={12}>
                <TextField autoComplete="email" name="urlToImage" variant="outlined" required fullWidth id="urlToImage" label="urlToImage" onChange={e => onTextFieldChange(e)} />
              </Grid>

              <Grid item xs={12}>
                <TextField autoComplete="email" name="publishedAt" variant="outlined" required fullWidth id="publishedAt" label="publishedAt" onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="content" variant="outlined" required fullWidth id="content" label="content" onChange={e => onTextFieldChange(e)} />
              </Grid>

            </Grid>
            <Box m={3}>
              <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)} >Add</Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>

        </Grid>
      </Grid>
    </>
  )
}

export default AddArticles