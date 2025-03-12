import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AiMl from './pages/AiMl';
import Automation from './pages/Automation';
import DevOps from './pages/DevOps';
import Startups from './pages/Startups';
import Media from './pages/Media';
import Partners from './components/Partners';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-ml-projects" element={<AiMl />} />
            <Route path="/automation-qa" element={<Automation />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/startups-ideas" element={<Startups />} />
            <Route path="/media" element={<Media />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;