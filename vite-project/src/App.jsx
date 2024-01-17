import './App.css'
import Home from "./assets/pages/home.jsx"
import Contacts from "./assets/pages/contacts.jsx";
import Registrationform from "./assets/pages/registration-form.jsx"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="left">
            <ul>
              <li><Link className='text' to="/">Kalvium ❤️</Link></li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><Link className='text' to="/contacts">Contacts</Link></li>
              <li><Link className='text' to="/registration-form">Registration Form</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/registration-form" element={<Registrationform />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App
