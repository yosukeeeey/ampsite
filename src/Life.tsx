import React from 'react';
import styled from "styled-components";
import { useScroll } from './useScroll';
import Carousel from './Animation/carouSel';
import { Fadein } from './Animation/fadein';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import './App.css';
import AppBar from './Components/Header/AppBar';
import AppBarLife from './Components/Header/AppBarLife';
import AppFooterLife from './Components/Footer/AppFooterLife';
import IconFadein from './Components/Icon/TitileIcon';
import LifeBlog from './LifeBlog';
import './Life.css';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';
import { pins } from './ChurchMaps';
import ChurchMapComponent from './ChurchMaps.View';
import LifeActivity from './LifeActivity';

const TextCenter ={
    color:"white",
    margin:"auto 0", 
    textAlign:"center"
}

function Life() {
    return (
      <div>
        
        <div className="header" style={{ height: "auto" }}>
          <AppBarLife flag={true} />
        </div> 
        
        <div className="body">
          <IconFadein />
        
          <div className='top-body'>
              <Reveal animation={Animation.FadeIn} delay={1000}>
                <h1 className='Life_h1_text'> Welcome </h1>
              </Reveal>
              <br></br>
              <Reveal animation={Animation.FadeIn} delay={2000}>
                <p className='Life_top_p_text'>私たちは「Life 2.0」として主に東京都内で活動しています！</p>
                <p className='Life_top_p_text'>職種問わず若手社会人で構成されており、毎週日曜は教会で礼拝に参加したり</p>
                <p className='Life_top_p_text'>互いの人生も知り助け合いながら、日々過ごしています。</p>
              </Reveal>
          </div>

          <section id="LifeBlog">
            <LifeBlog />
          </section>
        <section id="LifeAbout">
          <LifeActivity />
        </section>
        <section id="LifeContact">
          <br></br>
          <div className='div-space'></div>
          <h1 className='h1-title'>Contact</h1>
          <p>Content for section 2</p>
        </section>
        </div>
        
        <AppFooterLife />
      </div>
    );
  }

export default Life;
