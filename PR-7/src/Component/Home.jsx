import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getStorageData, setStorageData } from '../services/storageData';
import { Badge, Button, Card, Col, Container, Row, Form } from "react-bootstrap";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        let data = getStorageData();
        let filterData = data.filter(pro => pro.id != id);
        setProducts(filterData);
        setFilteredProducts(filterData);
        setStorageData(filterData);
    };

    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    };

    useEffect(() => {
        let data = getStorageData();
        setProducts(data);
        setFilteredProducts(data);
    }, []);

    return (
        <Container>
            <Row>
                {filteredProducts.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="h-100 shadow">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                style={{ height: "200px", objectFit: "cover" }}
                            />

                            <Card.Body>
                                <Badge bg="primary" className="mb-2">
                                    {item.category}
                                </Badge>

                                <Card.Title>{item.title}</Card.Title>

                                <Card.Text>{item.description}</Card.Text>

                                <Card.Text>
                                    <strong>Price:</strong> ₹{item.price}
                                </Card.Text>

                                <Card.Text>
                                    <strong>Quantity:</strong> {item.quantity}
                                </Card.Text>

                                <Button onClick={() => handleEdit(item.id)} variant="info">
                                    Edit
                                </Button>&nbsp;&nbsp;
                                <Button onClick={() => handleDelete(item.id)} variant="danger">
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;