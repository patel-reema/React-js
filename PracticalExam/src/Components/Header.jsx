import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Services/Actions/authActions';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    return (
        <header className="app-header glass-header">
            <div className="header-container">
                <div className="header-brand">
                    <Link to="/" className="brand-logo">🎓 StudentHub</Link>
                </div>
                {user && (
                    <div className="header-actions">
                        <div className="user-profile">
                            <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="Profile" className="user-avatar" />
                            <span className="user-email">{user.email}</span>
                        </div>
                        <button className="btn btn-outline" onClick={() => dispatch(logoutUser())}>
                            <FiLogOut /> Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
