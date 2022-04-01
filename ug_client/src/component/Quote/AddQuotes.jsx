import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState } from "react";
import ReceiveQuote from "./ReceiveQuote";
const AddService = () => {
  const [service, setService] = useState({
    name:"",
    email:"",
        GardeningAddress: "",
        GardeningArea: "",
        
        GardenImages:"",
        WorkDescription:"",
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
      await axios.post(`http://localhost:3001/Quotation`, service)
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <ReceiveQuote/>

  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={3} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4">Add Quote</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={5}>
            <Grid item xs={12}>
                    <lable>User Full Name</lable>
                                <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name"  value={service.name} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                           


                              
                            <Grid item xs={12}>
                    <lable>Email</lable>
                                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" value={service.email} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                
                                <lable>GardeningArea</lable>
                                            <TextField autoComplete="GardeningArea" name="GardeningArea" variant="outlined" required fullWidth id="GardeningArea"  value={service.GardeningArea} onChange={e => onTextFieldChange(e)} />
                            </Grid>


                            <Grid item xs={12}>
                    <lable>GardeningAddress</lable>
                                <TextField autoComplete="GardeningAddress" name="GardeningAddress" variant="outlined" required fullWidth id="GardeningAddress" value={service.GardeningAddress} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>


                            <Grid item xs={12}>
                    <lable>WorkDescription</lable>
                                <TextField autoComplete="WorkDescription" name="WorkDescription" variant="outlined" required fullWidth id="WorkDescription" value={service.WorkDescription} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>


                             
                            <Grid item xs={12}>
                                
                    <lable>Garden Images</lable>
                                <TextField type="file" autoComplete="GardenImages" name="GardenImages" variant="outlined" required fullWidth id="GardenImages" value={service.GardenImages} onChange={e => onTextFieldChange(e)} />
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
