import React from 'react';
import Navbar from './content/jsx/Navbar';
import Main from './content/jsx/Main';
import Footer from './content/jsx/Footer';
import Resume_1 from './content/jsx/resume/Resume_1';
import Creator from './content/jsx/resume/Creator';
import ReactPDF from '@react-pdf/renderer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom';

import './App.css';
import './content/css/normalize.css'


function App() {
 

  return (
    <div className='font-face'>
      
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar/><Main/><Footer/></div>} />
        <Route path="/resume" element={<div><Navbar/><Resume_1/><Footer/></div>} />
        
      </Routes>
    </Router>
    
    </div>
  );
}


export default App;
/* <Navbar/>
      <Main/>
      <Footer/> */