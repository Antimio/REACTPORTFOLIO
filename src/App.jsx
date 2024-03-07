import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact';


function App(){
  return(
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<ProjectGallery />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </Wrapper>
      </div>
    </Router>
  );
}

export default App;