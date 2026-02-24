import { useState } from "react";
import { getStorageData, setStorageData } from '../services/storageData';
import { useNavigate } from 'react-router';
import generateUniqueId from 'generate-unique-id';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddProduct = () => {
    const navigate = useNavigate();
    const initialState = {
        id: "",
        title: '',
        description: '',
        price: '',
        category: '',
        image: '',
        quantity: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.id = generateUniqueId({ length: 6, useLetters: false });
        let data = getStorageData();
        data.push(formData);
        setStorageData(data);

        navigate('/');
    }

    return (
        <>
            <Container>
                <h2>Add New Product</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="title" type="text" value={formData.title} onChange={handleChange} placeholder="Enter Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="description" type="text" value={formData.description} onChange={handleChange} placeholder="Enter description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Enter price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Enter quantity" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select name="category" onChange={handleChange} aria-label='Default select example'>
                                <option>--select category--</option>
                                <option value='Fashion' selected={formData.category == 'Fashion'}>Fashion</option>
                                <option value='Grosseries' selected={formData.category == 'Grosseries'}>Grosseries</option>
                                <option value='Mobile' selected={formData.category == 'Mobile'}>Mobile</option>
                                <option value='Electronics' selected={formData.category == 'Electronics'}>Electronics</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="image" type="text" value={formData.image} onChange={handleChange} placeholder="Enter image" />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Add Product</Button>
                </Form>
            </Container>
        </>
    )

};

export default AddProduct;