import React, {useState, useEffect} from 'react';
import {Reveal, RevealChildren, RevealMode, } from 'react-genie'
import { Animation,ReactGenieAnimations } from 'react-genie-styled-components';
import AnimatedText  from './AnimatedText';

import LIFE_TALK_BLK from './LINE_TALK_black.jpg';
import LIFE_TABLE_WHT from './LINE_TABLE_white.jpg';


const txt1 = "Welcome to LIFEeeeeeeeeeeeN Roooooooom";
const txt2 = "Thank you coming this page!!!";
const txt3 = "Please Scroll down......."


export const Fadein = () => {
  return (
    <React.Fragment>
      <ReactGenieAnimations />
      <div style={{backgroundColor:'#090a0e'}}>
      <Reveal animation={Animation.SlideInRight} mode={RevealMode.Clone} delay={1000}>
          <div>
            <img
                className='Life_Talk_Blk'
                src={LIFE_TALK_BLK}
                style={{margin:"auto",display:'block',width:'40%'}}
              />
          </div>
        </Reveal>
    </div>
    <div style={{backgroundColor:'#f6f7e9'}}>
      <Reveal animation={Animation.FadeInLeft} mode={RevealMode.Clone}>
        <div>
            <img
                className='Life_Table_Wht'
                src={LIFE_TABLE_WHT}
                style={{margin:"auto",display:'block',width:'40%'}}
              />
          </div>
        </Reveal>
    </div>
    <div style={{backgroundColor:'#f6f7e9', height:'50vh'}}>
      <AnimatedText text={txt1} />
    </div>
    <div style={{backgroundColor:'#f6f7e9', height:'50vh'}}>
      <AnimatedText text={txt2} />
    </div>
    <div style={{backgroundColor:'#f6f7e9', height:'20vh'}}>
      <AnimatedText text={txt3} />
    </div>
    
    </React.Fragment>
    
  );
};