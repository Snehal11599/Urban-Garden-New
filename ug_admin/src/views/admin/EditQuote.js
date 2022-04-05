import {  Box, Grid, TextField } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import emailjs from 'emailjs-com'

const EditQuote = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState({
        email: "",
        GardeningAddress: "",
        GardeningArea: "",
        GardenImages: "",
        WorkDescription: "",
    });
    useEffect(() => {
        async function getquote() {
            try {
                const quote = await axios.get(`http://localhost:3001/Quotation/${id}`)
                setQuote(quote.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getquote();
    }, [id]);

    function onTextFieldChange(e) {
        setQuote({
            ...quote,
            [e.target.name]: e.target.value
        })
    }

 async function callBoth(e){
    e.preventDefault()
    try {
        await axios.put(`http://localhost:3001/Quotation/${id}`, quote)
    } catch (error) {
        console.log("Something is Wrong");
    }
    
     e.preventDefault()
        emailjs.sendForm("service_b3nh3g9", "template_tbkloo6", e.target, "nFxs7WI33NkoTBKnZ").then(res => {
            alert('Message Sent Successfully')
            console.log(res);
        }).catch(err => console.log(err));
        
    
}
    return (
        <>
            <Box textAlign="center" p={2} mb={2}>
            </Box>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} mb={2}>
                        {/* <Typography variant="h4">  <Box m={3}>
                            <Button type="submit" variant="contained" color="primary" onSubmit={sendEmail} >Send Message</Button>
                        </Box></Typography> */}
                    </Box>
                    <form onSubmit={callBoth}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Mail" value={quote.email} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="GardeningAddress" name="GardeningAddress" variant="outlined" required fullWidth id="GardeningAddress" label="GardeningAddress" value={quote.GardeningAddress} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="GardeningArea" name="GardeningArea" variant="outlined" required fullWidth id="GardeningArea" label="Client Garden Area" value={quote.GardeningArea} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="GardenImages" name="GardenImages" variant="outlined" required fullWidth id="GardenImages" label="GardenImages" value={quote.GardenImages} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="QuoteAmount" name="QuoteAmount" variant="outlined" required fullWidth id="QuoteAmount" label="QuoteAmount" value={quote.QuoteAmount} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            {/* <Button type="submit" variant="contained" color="primary" fullWidth onClick={e =>sendEmail(e)} >Submit Quote</Button> */}
                            <button type="submit" className="btn btn-success" style={{ pointerEvents: " all", cursor: "pointer" }} >SEND MESSAGE</button>
                        </Box>
                    </form>
                </Grid>
                <Grid item md={6} xs={12}>
                </Grid>
            </Grid>
        </>
    )
}


export default EditQuote
