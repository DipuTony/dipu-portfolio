/////////////////////////////////////////////
//  
//  Author :- Dipu Kumar Singh
//  Project :- Dipu Porfolio
//  Date : - 03 - Oct - 2022
//  Component :- App.js
//  Note : -
//
/////////////////////////////////////////////

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import About from './Pages/About';
import Blog from './Pages/Blog';
import BlogSinglePost from './Pages/BlogSinglePost';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/blog" element={< Blog />} />
          <Route path="/blog/:id" element={< BlogSinglePost />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
