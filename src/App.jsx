import React from 'react';
import './App.css'; 
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header> {/* Changed to semantic header tag */}
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
