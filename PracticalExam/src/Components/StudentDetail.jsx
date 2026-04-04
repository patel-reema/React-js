import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiPhone, FiBook, FiCalendar } from 'react-icons/fi';

const StudentDetail = () => {
    const { id } = useParams();
    const { students } = useSelector(state => state.student);
    const student = students.find(s => s.id === id) || null;

    if (!student) return <div className="loader">Student not found or loading...</div>;

    return (
        <div className="container detail-container">
            <div className="detail-header">
                <Link to="/" className="btn-back"><FiArrowLeft /> Back</Link>
                <h2>Student Details</h2>
            </div>

            <div className="detail-card glass-panel">
                <div className="detail-avatar-section">
                    <div className="avatar-placeholder">
                        <FiUser size={64} />
                    </div>
                    <h3>{student.name}</h3>
                    <span className="course-badge">{student.course}</span>
                </div>

                <div className="detail-info-grid">
                    <div className="info-item">
                        <FiMail className="info-icon" />
                        <div>
                            <label>Email Address</label>
                            <p>{student.email}</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiPhone className="info-icon" />
                        <div>
                            <label>Contact Number</label>
                            <p>{student.contact}</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiCalendar className="info-icon" />
                        <div>
                            <label>Age</label>
                            <p>{student.age} years old</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiBook className="info-icon" />
                        <div>
                            <label>Enrolled Course</label>
                            <p>{student.course}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;
