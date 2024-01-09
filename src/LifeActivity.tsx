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
                            <li><strong>Life Talk</strong> : ご飯を食べたり、ゲームをしたり、そしてそれぞれの人生について、分かち合います</li>
                            <li><strong>ThanksGiving Party</strong> : 収穫を祝ってご飯を食べながらワイワイ！</li>
                            <li><strong>本栖湖キャンプ</strong> : 本栖湖にあるキャンプ場で神様が創造した自然を味わってリフレッシュ！</li>
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
