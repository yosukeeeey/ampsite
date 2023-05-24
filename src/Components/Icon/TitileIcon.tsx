import Icon from './gif2.gif'
import {Reveal, RevealMode} from 'react-genie'
import { Animation,ReactGenieAnimations } from 'react-genie-styled-components';

const IconFadein = () => {
  return (
    
    <div>
        <Reveal animation={Animation.SlideInRight} mode={RevealMode.Clone}>
            <div>
                <img src={Icon}  alt="アイコン" style={{margin:"auto",display:'block',width:'40%'}}/>
            </div>
        </Reveal>
    </div>
  );
};

export default IconFadein;