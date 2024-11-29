
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { Services } from './components/Services';
// import Portfolio from './components/Portfolio';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './pages/NotFound';

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
};

