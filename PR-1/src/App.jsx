import UserProfilecard from './Component/UserProfilecard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>USER LIST</h1>

      <div className="users-container">
        <UserProfilecard
          name="Shreya Pal"
          email="siyu@gmail"
          location="Gujarat, India"
          moblieNo="00000 00000"
          profilePic="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg"
          skills="Sport, Basic Computer, Drawing"
          profile="I am a passionate learner and have good skills in my field."
        />

        <UserProfilecard
          name="Hetal Pal"
          email="hetal@gmail"
          location="Ladakh, India"
          moblieNo="00000 00000"
          profilePic="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg"
          skills="Editing, Data Entry"
          profile="I am a passionate learner and have good skills in my field."
        />

        <UserProfilecard
          name="Yashvi Pal"
          email="yashu@gmail"
          location="Hyderabad, India"
          moblieNo="00000 00000"
          profilePic="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg"
          skills="Cooking, Graphic Design, Drawing"
          profile="I am a passionate learner and have good skills in my field."
        />
      </div>
    </div>
  );
}

export default App;
