import React from 'react';
import styled from "styled-components";
import { useScroll } from './useScroll';
import Carousel from './Animation/carouSel';
import { Fadein } from './Animation/fadein';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import './App.css';
import AppBar from './Components/Header/AppBar';
import IconFadein from './Components/Icon/TitileIcon';

function Home() {
    const [ref, moveTo] = useScroll();
    const [ref1, moveTo1] = useScroll();
    return (
      <div>
        <AppBar />
        <button type="button" onClick={moveTo}>
          移動
        </button>
        <button type="button" onClick={moveTo1}>
          移動1
        </button>
        <Carousel />
        
        <IconFadein />
        
        <div style={{ height: "200vh" }}>内容</div>
        <div>testtest</div>
        <div>testtest</div>
        <div>testtest</div>
        <ReactGenieAnimations />
        <Fadein/>
        <h2 ref={ref1}>footer1</h2>
        <div style={{ height: "200vh" }}>内容1</div>
        <div>testtest</div>
        <div>testtest</div>
        <div>testtest</div>
        <h2 ref={ref}>footer</h2>
      </div>
    );
  }

export default Home;
