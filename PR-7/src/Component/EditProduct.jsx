import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from '../services/storageData';
import { useNavigate, useParams } from 'react-router';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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
        let data = getStorageData();
        let updatedata = data.map(prod => {
            if (prod.id == id) {
                return formData;
            } else {
                return prod;
            }
        });

        setStorageData(updatedata);
        setFormData(initialState);
        navigate('/');
    };

    useEffect(() => {
        if (id) {
            let data = getStorageData();
            let record = data.find(prod => prod.id == id);
            if (record) {
                setFormData(record);
            };
        }
    }, [id]);
    return (
        <>
            <Container>
                <h2>Edit Product</h2>
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
                            <Form.Select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">--select category--</option>
                                <option value='Fashion'>Fashion</option>
                                <option value='Grosseries'>Grosseries</option>
                                <option value='Mobile'>Mobile</option>
                                <option value='Electronics'>Electronics</option>
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
                    <Button type="submit">Update Product</Button>
                </Form>
            </Container>
        </>
    )
};

export default EditProduct;