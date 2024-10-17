import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className='d-flex flex-column justify-content-between' style={{ minHeight: "100vh" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
