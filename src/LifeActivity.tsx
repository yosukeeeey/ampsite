import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//import 'swiper/css';
import './LifeActivity.css';
import Swipe from './ImgSwipe';

export default function LifeActivity(){
    return(
        <div className='activity-body'>
            <br></br>
            <div className='div-space'></div>
            <h1 className='activity-body-h1-title'><strong>Activity</strong></h1>
            <div className="activity-split">
                <div className="activity-split-item split-left">
                    <div className="activity-split-left__inner">
                        <p>以下のような活動を行っています</p>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="activity-split-item split-right">
                    <div className="activity-split-right__inner">
                        <br></br>
                    </div>
                </div>
            </div>
            <Swipe />
        </div>
    )
}
