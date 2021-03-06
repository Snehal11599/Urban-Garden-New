import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState } from "react";
import News from "./News";

const AddNews = () => {
  const [service, setService] = useState({
    id: "",
    author: "",
    title: "",
    desp: "",
    url: "",
    urlToImage: "",
    publishedAt: "",

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
      await axios.post(`http://localhost:3001/articles`, service)
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <News />
  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}></Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4">Add News</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
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
                <TextField autoComplete="email" name="urlToImage" variant="outlined" required fullWidth id="urlToImage" label="urlToImage" onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="publishedAt" variant="outlined" required fullWidth id="publishedAt" label="publishedAt" onChange={e => onTextFieldChange(e)} />
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

export default AddNews