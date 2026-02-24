import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary mb-4">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to={'/add-product'} className="btn btn-warning">Add Produt</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;