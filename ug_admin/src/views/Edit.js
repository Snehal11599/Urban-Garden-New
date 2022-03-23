import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";


const Edit = () => {

  const { id } = useParams();
  const history = useHistory();
  const [service, setService] = useState({

    id: "",
    name: "",
    author: "",
    title: "",
    decription: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: ""
  });
  useEffect(() => {
    async function getService() {
      try {
        const service = await axios.get(`http://localhost:3000/articles/${id}`)
        // console.log(student.data);
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
            <Typography variant="h4">Update Service</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="Id" value={id} onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="stuname" name="title" variant="outlined" required fullWidth id="title" label="Title" value={service.title} onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="decription" variant="outlined" required fullWidth id="decription" label="Description" value={service.decription} onChange={e => onTextFieldChange(e)} />
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

export default Edit