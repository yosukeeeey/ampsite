import {Reveal, RevealMode} from 'react-genie'
import { Animation,ReactGenieAnimations } from 'react-genie-styled-components';

const Div = () =>{
  return(
    <div>
      helloooo howga;lga;g
    </div>
  )
}

export const Fadein = () => {
  return (
    
    <div>
        <Reveal animation={Animation.SlideInRight} mode={RevealMode.Clone}>
            <div>ddddd</div>
        </Reveal>
    </div>
  );
};