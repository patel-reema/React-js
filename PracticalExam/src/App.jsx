import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

import Header from './Components/Header';
import Login from './Components/Login';
import StudentList from './Components/StudentList';
import StudentForm from './Components/StudentForm';
import StudentDetail from './Components/StudentDetail';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const { loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="app-loading">
        <div className="app-loading-spinner" />
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><StudentList /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
        <Route path="/student/:id" element={<PrivateRoute><StudentDetail /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
