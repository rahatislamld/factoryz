import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Home from './components/Home';
import './styles/tailwind.css';


// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Technologies from './components/Technologies';
// import Blog from './components/Blog';
// import Testimonials from './components/Testimonials';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
