import React from 'react';
import styled from "styled-components";
import Scroll from 'react-scroll';
import { useScroll } from './useScroll';
import Carousel from './Animation/carouSel';
import { Fadein } from './Animation/fadein';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import './App.css';
import AppBar from './Components/Header/AppBar';
import IconFadein from './Components/Icon/TitileIcon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Story from './Story';
import Life from './Life';

function App() {
    
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Life2.0" element={<Life />} /> 
      </Routes>
    </BrowserRouter>
    );
  }

export default App;
