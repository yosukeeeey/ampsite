import React from 'react';
import styled from "styled-components";
import { useScroll } from './useScroll';
import Carousel from './Animation/carouSel';
import { Fadein } from './Animation/fadein';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import './App.css';
import AppBar from './Components/Header/AppBar';
import IconFadein from './Components/Icon/TitileIcon';

function Story() {
    return (
      <div>
        <AppBar />
        <Carousel />
        
        <IconFadein />
        
        <div style={{ height: "200vh" }}>内容</div>
        <div>testtest</div>
        <div>testtest</div>
        <div>testtest</div>
        <ReactGenieAnimations />
        <Fadein/>
        <div style={{ height: "200vh" }}>内容1</div>
        <div>testtest</div>
        <div>testtest</div>
        <div>testtest</div>
        
      </div>
    );
  }

export default Story;
