import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState,useEffect} from "react";
const Register = () => {
  const [register, setregister] = useState({
    name: "",
    surname: "",
    contact: "",
    email: "",
    password: ""
    });
  function onTextFieldChange(e) {
    setregister({
      ...register,
      [e.target.name]: e.target.value
    })
    console.log(register);
  }
  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:3001/Register`, register)
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  useEffect(() => {
      return () => {
          onFormSubmit()
      };
  })
  return (
    <>
      <Box textAlign="center" p={2} mb={2}></Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4"> Register Here</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Name" onChange={e => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="sarname" name="surname" variant="outlined" required fullWidth id="surname" label="Surname" onChange={e => onTextFieldChange(e)} />
              </Grid>
               <Grid item xs={12}>
                <TextField autoComplete="contact" name="contact" variant="outlined" required fullWidth id="contact" label="contact" onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="email" onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="password"  name="password"type="password" id="password" variant="outlined" required fullWidth  label="Password" onChange={e => onTextFieldChange(e)} />
              </Grid>
               </Grid> 
            <Box m={3}>
              <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)} >Submit</Button>
         </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
        </Grid>
      </Grid>
    </>
  )
}

export default Register