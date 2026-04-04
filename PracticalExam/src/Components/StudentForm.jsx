import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent } from '../Services/Actions/studentActions';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiSave } from 'react-icons/fi';

const StudentForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { students } = useSelector(state => state.student);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        age: '',
        contact: ''
    });

    useEffect(() => {
        if (id && students.length > 0) {
            const studentToEdit = students.find(s => s.id === id);
            if (studentToEdit) {
                setFormData(studentToEdit);
            }
        }
    }, [id, students]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updateStudent(id, formData));
        } else {
            dispatch(addStudent(formData));
        }
        navigate('/');
    };

    return (
        <div className="container form-container">
            <div className="form-header">
                <Link to="/" className="btn-back"><FiArrowLeft /> Back</Link>
                <h2>{id ? 'Edit Student' : 'Add New Student'}</h2>
            </div>

            <form onSubmit={handleSubmit} className="student-form glass-panel">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>

                <div className="form-row">
                    <div className="form-group half">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                    </div>

                    <div className="form-group half">
                        <label>Contact Number</label>
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder="+1 234 567 890" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group half">
                        <label>Course</label>
                        <input type="text" name="course" value={formData.course} onChange={handleChange} required placeholder="Computer Science" />
                    </div>

                    <div className="form-group half">
                        <label>Age</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="20" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                    <FiSave /> {id ? 'Update Student' : 'Save Student'}
                </button>
            </form>
        </div>
    );
};

export default StudentForm;
