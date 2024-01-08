import Icon from './gif2.gif'
import Logo from '../../Animation/Life-LOGO.jpg';
import {Reveal, RevealMode} from 'react-genie'
import { Animation,ReactGenieAnimations } from 'react-genie-styled-components';

const IconFadein = () => {
  return (
    <div style={{backgroundColor: '#231d35'}}>
        <Reveal animation={Animation.SlideInRight} mode={RevealMode.Clone}>
            <div>
                <img src={Logo}  alt="アイコン" style={{margin:"auto",display:'block',width:'auto'}}/>
            </div>
        </Reveal>
    </div>
  );
};

export default IconFadein;