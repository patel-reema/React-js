import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import post1 from "../assets/blog-1.avif";
import post2 from "../assets/blog-2.webp";
import post3 from "../assets/blog-3.avif";
import post4 from "../assets/blog-4.webp";

export default function BlogView() {

    const blogs = [
        { id: 1, title: "The Best Ice Cream You’ll Never Eat", img: post1, category: "Business Tips", date: "Jun 30, 2024" },
        { id: 2, title: "Fancy Figs? Make this Ice Cream", img: post2, category: "Business Tips", date: "Jun 30, 2024" },
        { id: 3, title: "The Art Of Crafting Gourmet Ice Cream", img: post3, category: "Business Tips", date: "Jun 30, 2024" },
        { id: 4, title: "Top Ice Cream Flavors To Sell This Year", img: post4, category: "Business Tips", date: "Jun 30, 2024" }
    ];

    const categories = [
        "Business Tips",
        "Dessert Recipes",
        "Flavor Trends",
        "Healthy Options",
        "Ice Cream",
        "Uncategorized"
    ];

    const recentPosts = [
        {
            id: 1,
            title: "The Best Ice Cream You’ll Never Eat",
            date: "May 12, 2025",
            img: post1,
            com: "0 comments"
        },
        {
            id: 2,
            title: "Fancy Figs? Make this Ice Cream",
            date: "May 10, 2025",
            img: post2,
            com: "0 comments"
        },
        {
            id: 3,
            title: "The Art Of Crafting Gourmet Ice Cream",
            date: "May 8, 2025",
            img: post3,
            com: "0 comments"
        }
    ];


    const tags = ["Beauty", "Electric", "Fashion", "Hot", "Jewelry", "Organic", "Simple"];

    return (
        <>
            <Header />
            <Container className="my-5">
                <h1 className="text-center mb-4 title">Blogs</h1>

                <div className="text-center mb-5">
                    {categories.map((cat, i) => (
                        <Button
                            key={i}
                            variant="link"
                            className="category-btn"
                        >
                            {cat}
                        </Button>

                    ))}
                </div>

                <Row>
                    <Col md={3}>
                        <h5 className="title mb-4">Search</h5>
                        <Form.Control placeholder="Search blog..." className="mb-4 rounded-pill" />

                        <h5 className="title mb-4">Categories</h5>
                        {categories.map((c, i) => (
                            <div key={i} className="sidebar-cat">{c}</div>
                        ))}


                        <h5 className="mb-4 mt-4">Recent Posts</h5>

                        {recentPosts.map(post => (
                            <div key={post.id} className="recent-post">

                                <img src={post.img} alt="" />

                                <div>
                                    <small>{post.date}</small>
                                    <div className="recent-title">{post.title}</div>
                                    <small>{post.com}</small>
                                </div>

                            </div>
                        ))}

                        <h5 className="mt-4">Tags</h5>

                        <div className="tags-wrapper">
                            {tags.map((tag, i) => (
                                <Button key={i} className="btn-animated me-2 mb-2">
                                    {tag}
                                </Button>
                            ))}
                        </div>

                    </Col>

                    {/* BLOG LIST */}
                    <Col md={9}>

                        {blogs.map(blog => (
                            <Card className="mb-4 border-0 shadow-sm">

                                <div style={{ position: "relative" }}>

                                    <div className="img-box">
                                        <Card.Img src={blog.img} />

                                        <span className="category-badge">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                <Card.Body>
                                    <small className="blog-date">
                                        {blog.date}
                                    </small>
                                    <Card.Title className="title blog-title">{blog.title}</Card.Title>
                                    <Card.Text>sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a...</Card.Text>
                                    <Button className="read-btn">
                                        Read More
                                    </Button>
                                </Card.Body>

                            </Card>

                        ))}

                    </Col>

                </Row>

            </Container>

            <Footer />
        </>
    )
}
