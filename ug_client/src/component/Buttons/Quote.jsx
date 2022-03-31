import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import User from "./User";
import axios from "axios";
const LoginForm = ({ onSubmit }) => {
    const [quote, setquote] = useState({

        GardeningAddress: "",
        GardeningArea: "",
        GardenImages: "",
        WorkDescription: "",
    });

    const [status, setStatus] = useState();
    function onTextFieldChange(e) {
        setquote({
            ...quote,
            [e.target.name]: e.target.value
        })
        console.log(quote);
    }

    //for uploading file
    let formData = new FormData();

    const onFileChange = (e) => {
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            formData.append('file', e.target.files[0])
        }
    }

    const SubmitFileData = () => {
        axios.post(
            'https://v2.convertapi.com/upload ',
            { formData }

        )
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })

    }

    //adding data
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.post(` http://localhost:3001/Quotation`, quote)
            setStatus(true);
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    if (status) {
        return <User />

    }
    return (
        <>
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="orderno">
                <Form.Label>Order No </Form.Label>
                <Form.Control
                    type="order no"
                    placeholder="Enter order no"
                    name="orderno"
                    onChange={e => onTextFieldChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="GardeningAddress">
                <Form.Label>Garden address </Form.Label>
                <Form.Control
                    type="address"
                    placeholder="Enter address"
                    name="GardeningAddress"
                    onChange={e => onTextFieldChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="GardeningArea">
                <Form.Label>Enter Gardening Area</Form.Label>
                <Form.Control
                    type="Area"
                    placeholder="Area"
                    name="GardeningArea"
                    onChange={e => onTextFieldChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="WorkDescription">
                <Form.Label>WorkDescription</Form.Label>
                <Form.Control
                    type="WorkDescription"
                    placeholder="WorkDescription"
                    name="WorkDescription"
                    onChange={e => onTextFieldChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="images">
                <Form.Label>Garden Images</Form.Label>
                <Form.Control
                    type="file"
                    placeholder="images"
                    name="GardenImages"
                    onChange={e => onFileChange(e)} />

            </Form.Group>


            <Button variant="primary" type="submit" onClick={onFormSubmit} block="true">
                Submit
            </Button>
        </Form>
        </>
    );
};
export default function Quote() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
                <Button className="btn btn-success text-white cd-5" onClick={handleShow}>
                    Submit Request
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onSubmit={onLoginFormSubmit} />
                </Modal.Body>

            </Modal>
        </>
    );
}