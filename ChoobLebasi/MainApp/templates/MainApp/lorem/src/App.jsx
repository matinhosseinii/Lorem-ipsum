// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/main.jsx';
import Login from './pages/login.jsx';
import Contact from './pages/contact.jsx';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <footer>
          <p>&copy; 2024 My React App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
