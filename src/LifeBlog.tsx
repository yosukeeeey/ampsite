import React from 'react';
import { Button, Link } from '@mui/material';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import './LifeBlog.css';

export default function LifeBlog(){
    return(
        <div className='blog-body'>
            <br></br>
            <div className='div-space'></div>
            <h1 className='blog-body-h1-title'><strong>Blog</strong></h1>
            <div className="split">
                <div className="split-item split-left">
                    <div className="split-left__inner">
                        <p className='blog-text'>Life Talk・ブログはこちらから</p> 
                        <p className='blog-text'>日々の出来事をUpdateしています!!</p>
                        <br></br>
                        <Reveal animation={Animation.FadeInUp} delay={500}>
                            <h3>Life Talkって…??</h3>
                        </Reveal>
                        <Reveal animation={Animation.FadeInUp} delay={1000}>
                            <p className='blog-text'>”<strong>聖書</strong>の視点から日々の中での葛藤や悩みを捉えてみたり、過去や将来の事などそれぞれの人生を分かちあう時間です”</p>
                            <br></br><br></br>
                            <Button style={{backgroundColor: '#f7dc67', position: 'inherit'}}>
                                <Link href='/Life2.0/LifeTalk' style={{textAlign: 'center'}}><strong>Show More Life-Talk</strong></Link>
                            </Button>
                            
                        </Reveal>
                    </div>
                </div>
                <div className="split-item split-right">
                    <div className="split-right__inner">
                        <br></br>                    
                    </div>
                </div>
            </div>
        </div>
        
    );
}