import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getStorageData, setStorageData } from '../services/storageData';
import { Badge, Button, Card, Col, Container, Row, Form } from "react-bootstrap";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search.trim() === "") {
            setFilteredProducts(products);
            return;
        }

        let data = products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredProducts(data);
    };

    const handleSort = (order) => {
        if (!sortField) return;

        let sortedData = [...filteredProducts].sort((a, b) => {
            let valueA = a[sortField];
            let valueB = b[sortField];

            if (sortField === "price" || sortField === "quantity") {
                valueA = Number(valueA);
                valueB = Number(valueB);
            }

            if (typeof valueA === "string") {
                return order === "asc"
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }

            return order === "asc"
                ? valueA - valueB
                : valueB - valueA;
        });

        setFilteredProducts(sortedData);
        setSortOrder(order);
    };

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
            <div className="d-flex align-items-center gap-2 mb-4  w-100">
                <input
                    type="text"
                    placeholder="Search by title or category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control"
                    style={{ flex: 2 }}
                />

                <Button onClick={handleSearch} variant="primary">
                    Search
                </Button>

                <Form.Select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value)}
                    style={{ flex: 1 }}
                >
                    <option value="">Sort By</option>
                    <option value="title">Title</option>
                    <option value="category">Category</option>
                    <option value="price">Price</option>
                    <option value="quantity">Quantity</option>
                </Form.Select>

                <Button
                    variant="success"
                    onClick={() => handleSort("asc")}
                    disabled={!sortField}
                >
                    Ascending ↑
                </Button>

                <Button
                    variant="warning"
                    onClick={() => handleSort("desc")}
                    disabled={!sortField}
                >
                    Descending ↓
                </Button>
            </div>

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