import './UserProfilecard.css';

function UserProfilecard({
    name,
    email,
    location,
    moblieNo,
    profilePic,
    skills,
    profile
}) {
    return (
        <div className="user-card">
            <img src={profilePic} alt="Profile" />
            <h2>{name}</h2>
            <p>{email}</p>

            <div className="user-info">
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Mobile No:</strong> {moblieNo}</p>
                <p><strong>Skills:</strong> {skills}</p>
                <p><strong>Profile:</strong> {profile}</p>
            </div>
        </div>
    );
}

export default UserProfilecard;
