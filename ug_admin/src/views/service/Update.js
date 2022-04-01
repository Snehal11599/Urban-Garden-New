import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Update = () => {
    const { id } = useParams();
    const [service, setService] = useState({
        id: "",
        title: "",
        decription: ""
    });
    useEffect(() => {
        async function getService() {
            try {
                const service = await axios.get(`http://localhost:3001/service/${id}`)
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
    // edit service data
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3001/service/${id}`, service)
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
                        <Typography variant="h4">Update Service</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="Id" value={id} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="title" name="title" variant="outlined" required fullWidth id="title" label="Title" value={service.title} onChange={e => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="description" name="decription" variant="outlined" required fullWidth id="decription" label="Description" value={service.decription} onChange={e => onTextFieldChange(e)} />
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

export default Update
