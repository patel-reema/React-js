import { Container, Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../../Services/Action/cource.action";

const ViewInstructor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // get instructors from redux store
    const instructors = useSelector((state) => state.courseReducer.courses);

    const handleDelete = (id) => {
        dispatch(deleteCourse(id));
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Instructor List</h2>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Profession</th>
                        <th>Skills</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {instructors && instructors.length > 0 ? (
                        instructors.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>

                                <td>
                                    <img
                                        src={item.profileImage}
                                        alt="profile"
                                        width="50"
                                        height="50"
                                    />
                                </td>

                                <td>
                                    {item.firstName} {item.lastName}
                                </td>

                                <td>{item.email}</td>
                                <td>{item.phnumber}</td>
                                <td>{item.profession}</td>
                                <td>{item.skills}</td>

                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleEdit(item.id)}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">
                                No Instructor Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewInstructor;