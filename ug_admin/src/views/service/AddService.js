import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState } from "react";
import Service from "../service/Service"


const AddService = () => {
  const [service, setService] = useState({
    title: "",
    decription: ""
  });

  const [status, setStatus] = useState();
  function onTextFieldChange(e) {
    setService({
      ...service,
      [e.target.name]: e.target.value
    })
    console.log(service);
  }
  //add services
  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:3001/service`, service)
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <Service/>

  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4">Add SERVICE</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="Id" onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="stuname" name="title" variant="outlined" required fullWidth id="title" label="Title" onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="decription" variant="outlined" required fullWidth id="description" label="Description" onChange={e => onTextFieldChange(e)} />
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

export default AddService
