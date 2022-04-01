import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReceiveQuote from "./ReceiveQuote";


const EditQuote = () => {
    const { id } = useParams();
    const [status, setStatus] = useState();
    const [quote, setQuote] = useState({
        name: "",
        mail: "",
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
                setStatus(true)
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
            await axios.post(`http://localhost:3001/Quotation`, quote)
        } catch (error) {
            console.log("Something is Wrong");
        }
    }

    if (status) {
        return <ReceiveQuote />

    }

    return (
        <>
            <Box textAlign="center" p={1} mb={2}>
            </Box>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} mb={2}>
                        <Typography variant="h4"></Typography>

                        <h4> ADD    QUOTE</h4>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <lable> User Full Name</lable>
                                <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" value={quote.name} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <lable>Email</lable>
                                <TextField autoComplete="mail" name="mail" variant="outlined" required fullWidth id="mail" value={quote.mail} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <lable>GardeningAddress</lable>
                                <TextField autoComplete="GardeningAddress" name="GardeningAddress" variant="outlined" required fullWidth id="GardeningAddress" value={quote.GardeningAddress} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <lable>GardeningArea</lable>
                                <TextField autoComplete="GardeningArea" name="GardeningArea" variant="outlined" required fullWidth id="GardeningArea" value={quote.GardeningArea} onChange={e => onTextFieldChange(e)} />
                            </Grid>

                            <lable>WorkDescription</lable>
                            <TextField autoComplete="WorkDescription" name="WorkDescription" variant="outlined" required fullWidth id="WorkDescription" value={quote.WorkDescription} onChange={e => onTextFieldChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <Grid item xs={12}>

                                <lable>Garden Images</lable>
                                <TextField type="file" autoComplete="GardenImages" name="GardenImages" variant="outlined" required fullWidth id="GardenImages" value={quote.GardenImages} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <NavLink to="/ReceiveQuote">
                                <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)} >Submit Quote</Button>
                            </NavLink>
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
