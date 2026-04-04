import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents, deleteStudent } from '../Services/Actions/studentActions';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2, FiPlus, FiEye } from 'react-icons/fi';

const StudentList = () => {
    const dispatch = useDispatch();
    const { students, loading, error } = useSelector(state => state.student);

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            dispatch(deleteStudent(id));
        }
    };

    if (loading) return <div className="loader">Loading students...</div>;
    if (error) return <div className="error-message">Error: {error}</div>;

    return (
        <div className="container list-container">
            <div className="list-header">
                <h2>Students Directory</h2>
                <Link to="/add" className="btn btn-primary">
                    <FiPlus /> Add Student
                </Link>
            </div>

            <div className="student-grid">
                {students.length === 0 ? (
                    <div className="empty-state">No students found. Add one!</div>
                ) : (
                    students.map(student => (
                        <div key={student.id} className="student-card glass-panel">
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p className="course-badge">{student.course}</p>
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Contact:</strong> {student.contact}</p>
                            </div>
                            <div className="card-actions">
                                <Link to={`/student/${student.id}`} className="btn-icon btn-view" title="View Details">
                                    <FiEye />
                                </Link>
                                <Link to={`/edit/${student.id}`} className="btn-icon btn-edit" title="Edit">
                                    <FiEdit />
                                </Link>
                                <button className="btn-icon btn-delete" onClick={() => handleDelete(student.id)} title="Delete">
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default StudentList;
