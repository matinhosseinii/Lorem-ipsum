// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/main.jsx';
import Login from './pages/login.jsx';
import Contact from './pages/contact.jsx';
import User from './pages/user.jsx'
import Entry from './pages/entry.jsx'
import Subscribe from './pages/subscribe.jsx'
import Modal from './components/Modal.jsx'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/modal" element={<Modal/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
