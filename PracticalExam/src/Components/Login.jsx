import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGoogle } from '../Services/Actions/authActions';
import { Navigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector(state => state.auth);

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-container">
            <div className="glass-panel login-card">
                <div className="login-header">
                    <h2>Welcome to StudentHub</h2>
                    <p>Please sign in to manage students seamlessly.</p>
                </div>
                {error && <p className="error-message">{error}</p>}
                
                <button 
                    className="google-btn" 
                    onClick={() => dispatch(loginWithGoogle())}
                    disabled={loading}
                >
                    <FcGoogle className="google-icon" />
                    <span>{loading ? 'Signing in...' : 'Sign in with Google'}</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
