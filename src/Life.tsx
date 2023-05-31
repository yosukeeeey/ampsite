import React from 'react';
import styled from "styled-components";
import { useScroll } from './useScroll';
import Carousel from './Animation/carouSel';
import { Fadein } from './Animation/fadein';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import './App.css';
import AppBar from './Components/Header/AppBar';
import IconFadein from './Components/Icon/TitileIcon';
import './Life.css';

const TextCenter ={
    color:"white",
    margin:"auto 0", 
    textAlign:"center"
}

function Life() {
    return (
      <div>
        <AppBar />
        <div style={{ height: "100px" }}></div>
        
        <IconFadein />
        
        <div style={{ height: "180vh",backgroundColor:"black"}}>
            <h1 className='Life_h1_text'>We are Life 2.0</h1>
            <h2 className='Life_h2_text'>This is one of my favrite songs…『Way Maker』</h2>
              <br></br>
              <p className='lylcs_text'>You are here, moving in our midst</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>You are here, working in this place</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>You are here, moving in our midst</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>You are here, working in this place</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>You are</p>
              <p className='lylcs_text'>Way maker, miracle worker</p>
              <p className='lylcs_text'>Promise keeper, light in the darkness</p>
              <p className='lylcs_text'>My God, that is who You are</p>
              <p className='lylcs_text'>Way maker, miracle worker</p>
              <p className='lylcs_text'>Promise keeper, light in the darkness</p>
              <p className='lylcs_text'>My God, that is who You are</p>
              <p className='lylcs_text'>You are here, touching every heart</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship you</p>
              <p className='lylcs_text'>You are here, healing every heart</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>Oh, I worship You</p>
              <p className='lylcs_text'>You are here, turning lives around</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>You are here, and You are mending every heart</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>I worship You</p>
              <p className='lylcs_text'>You are</p>
              <p className='lylcs_text'>Way maker, miracle worker</p>
              <p className='lylcs_text'>Promise keeper, light in the darkness</p>
              <p className='lylcs_text'>My God, that is who You are</p>
              <p className='lylcs_text'>You are</p>
              <p className='lylcs_text'>Way maker, miracle worker</p>
              <p className='lylcs_text'>Promise keeper, light in the darkness</p>
              <p className='lylcs_text'>My God, that is who You are</p>
              <p className='lylcs_text'>That is who You are</p>
              <p className='lylcs_text'>That is who You are</p>
              <p className='lylcs_text'>That is who You are</p>
              <p className='lylcs_text'>That is who You are</p>
              <p className='lylcs_text'>You are, You are</p>
              <p className='lylcs_text'>You'll always be</p>
              <p className='lylcs_text'>Even when I don't see it, You're working</p>
              <p className='lylcs_text'>Even when I don't feel it, You're working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>Even when I don't see it, You're working</p>
              <p className='lylcs_text'>Even when I don't feel it, You're working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>Even when I don't see it, You're working</p>
              <p className='lylcs_text'>And even when I don't feel it, You're working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>Even when I don't see it, You're working</p>
              <p className='lylcs_text'>Even when I don't feel it, You're working</p>
              <p className='lylcs_text'>You never stop, You never stop working</p>
              <p className='lylcs_text'>You never stop, You never stop</p>
              <p className='lylcs_text'>Always working</p>
              <p className='lylcs_text'>Always moving</p>
              <p className='lylcs_text'>I know, I know, I know</p>
              <p className='lylcs_text'>My God can</p>
              <p className='lylcs_text'>And my God will</p>
        </div>
        <ReactGenieAnimations />
        <Fadein/>
        <IconFadein />
        <div style={{ height: "200vh",backgroundColor:"#14094c" }}>内容1</div>
        <div className='fade-text to__right' style={{height: "30vh",backgroundColor:"black"}}>testdddddddtest</div>
        <div>testtest</div>
        <div>testtest</div>
        <div style={{ height: "200vh",backgroundColor:"green" }}>内容1</div>
        <div>testtest</div>
        <div>testtest</div>
        
      </div>
    );
  }

export default Life;
