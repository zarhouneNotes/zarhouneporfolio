import logo from './logo.svg';
import './App.css';
import { Box, Button, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Projects from './components/Projects';
import WhatIDo from './components/WhatIDo';
import DoYouHaveIdea from './components/DoYouHaveIdea';
import DiscussProjet from './components/DiscussProjet';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';
import PreFooter from './components/PreFooter';
import Categories from './components/Categories';
import { Route, Routes, useLocation } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Aprops from './pages/Aprops';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import RealisationsPage from './pages/RealisationsPage';



function App() {
  const ref = useRef()

  const location = useLocation()

  useEffect(()=>{
      ref?.current.scrollIntoView({})
  } , [location.pathname])

  const GoTo = (ref)=>{
   
  }



  return (
    <Box >
     <Box ref={ref}> 
       <Navbar  />
     </Box>
      <Routes>
        <Route path='/' element={<Accueil />}    />
        <Route path='/about' element={<Aprops />}    />
        <Route path='/contact' element={<ContactPage />}    />
        <Route path='/services' element={<ServicesPage />}    />
        <Route path='/projects' element={<RealisationsPage />}    />

      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
