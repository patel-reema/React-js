import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';
import './App.css';

const getLocalData = () => {
  return JSON.parse(sessionStorage.getItem('employes')) || [];
}

function App() {
  const initialState = {
    id: "",
    fullName: "",
    email: "",
    age: "",
    mobile: "",
    address: "",
    salary: "",
    jobRole: "",
    status: "",
    profileImg: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [employes, setEmployes] = useState(getLocalData());
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName) {
      setError("Name is required");
      return;
    }

    if (!formData.email) {
      setError("Email is required");
      return;
    }

    if (!formData.mobile) {
      setError("Mobile number is required");
      return;
    }

    if (formData.mobile.length !== 10) {
      setError("Mobile number must be 10 digits.");
      return;
    }

    if (!formData.salary) {
      setError("Salary is required");
      return;
    }

    setError("");

    setFormData(initialState);
    if (!isEdit) {
      const newData = {
        ...formData,
        id: generateUniqueId({ length: 6, useLetters: false })
      };

      setEmployes([...employes, newData]);
    } else {
      let updateRecords = employes.map(employe => {
        if (employe.id === formData.id) {
          return formData;
        } else {
          return employe;
        }
      })

      setEmployes(updateRecords);
      setIsEdit(!isEdit);
    }
  };

  const handleEdit = (id) => {
    const record = employes.find(emp => emp.id === id);

    if (record) {
      setFormData(record);
      setIsEdit(true);
    }
  };

  const handleDelete = (id) => {
    const updated = employes.filter(emp => emp.id !== id);

    setEmployes(updated);
  };

  useEffect(() => {
    sessionStorage.setItem('employes', JSON.stringify(employes));
  }, [employes]);

  return (
    <>
      <div className='app-layout'>
        <div className='form-panel'>
          <h2>Employes Form</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name='fullName' value={formData.fullName} placeholder="Full name here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" name='email' value={formData.email} placeholder="Email here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" name='age' value={formData.age} placeholder="Age here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" name='mobile' value={formData.mobile} placeholder="Mobile here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" value={formData.address} name='address' rows={3} placeholder='Address here' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" name='salary' value={formData.salary} placeholder="Salary here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name='jobRole' value={formData.jobRole} placeholder="Job role here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name='status' value={formData.status} placeholder="Status here" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name='profileImg' value={formData.profileImg} placeholder="Profile image" onChange={handleChange} />
            </Form.Group>

            <Button type='submit'>{isEdit ? 'Update' : 'Add'} Employe</Button>

          </Form>
        </div>
        <div className="list-panel">
          <h2>Employee List</h2>

          <div className="employee-grid">
            {employes.map(emp => (
              <Card key={emp.id} className="employee-card">

                <Card.Img
                  variant="top"
                  src={emp.profileImg || "https://via.placeholder.com/200"}
                />

                <Card.Body>
                  <Card.Title>{emp.fullName}</Card.Title>
                  <Card.Text>{emp.email}</Card.Text>
                  <Card.Text>Age: {emp.age}</Card.Text>
                  <Card.Text>₹ {emp.salary}</Card.Text>

                  <Badge bg={emp.status === "Active" ? "success" : "secondary"}>
                    {emp.status}
                  </Badge>

                  <div className="card-actions">
                    <Button onClick={() => handleEdit(emp.id)}>
                      Edit
                    </Button>

                    <Button onClick={() => handleDelete(emp.id)}>
                      Delete
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
