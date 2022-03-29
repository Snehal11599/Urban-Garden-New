import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const EditQuote = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState({
        GardeningAddress: "",
        GardeningArea: "",
        GardenImages:"",
        WorkDescription:"",
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

    // edit quote data
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3001/Quotation/${id}`,quote)
        } catch (error) {
            console.log("Something is Wrong");
        }
    }

    return (
        <>
            <Box textAlign="center" p={2} mb={2}>
            </Box>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} mb={2}>
                        <Typography variant="h4"></Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="orderno" name="orderno" variant="outlined" required fullWidth id="orderno" label="Order no" value={quote.id} onChange={e => onTextFieldChange(e)}
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
                            <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)} >Submit Quote</Button>
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
