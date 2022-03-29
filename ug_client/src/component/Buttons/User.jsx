import { Modal, Button } from "react-bootstrap";
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@material-ui/core"
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Quote from "./Quote";

const ReceiveQuote = () => {
    const [quote, setquote] = useState([]);
    useEffect(() => {
        async function getquote() {
            try {
                const quote = await axios.get(" http://localhost:3001/Quotation")
                setquote(quote.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getquote();
    }, [])


    return (
        <div className="content">
            
            <Row>
                <Col md="50">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow style={{ backgroundColor: "#616161",width:"100px" }}>
                                    <TableCell align="center" >Order No</TableCell>
                                    <TableCell align="center">Gardening Address</TableCell>
                                    <TableCell align="center" >Gardening Area</TableCell>
                                    <TableCell align="center" >Quote Amount</TableCell>
                                    <TableCell align="center" >Work Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {quote.map((quote, orderno) => {
                                    return (
                                        <TableRow key={orderno}>
                                            <TableCell align="center">{quote.orderno}</TableCell>
                                            <TableCell align="center">{quote.GardeningAddress}</TableCell>
                                            <TableCell align="center">{quote.GardeningArea}</TableCell>
                                            <TableCell align="center">{quote.QuoteAmount}</TableCell>
                                            <TableCell align="center">{quote.WorkDescription}</TableCell>
                                            <br></br>
                                            <TableCell align="center">
                                                <Quote />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            </div>
        
    )
};
export default function User() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
         <div className="d-flex align-items-center justify-content-center"style={{ height: "20vh" }}>
             
                <Button className="btn btn-success text-white cd-5" onClick={handleShow}>
                    USER
                </Button>
            </div>
            <Modal
             show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello User</Modal.Title>
                    <Modal.Title> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReceiveQuote />
                </Modal.Body>

            </Modal>
        </>
    );
}