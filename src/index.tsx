import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useScroll } from './useScroll';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/




/*function Section () {
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const scrollTo = () => {
    scroll.scrollTo(100);
  };
  const scrollMore = () => {
    scroll.scrollMore(100);
  };
  const handleSetActive = (to?:any) => {
    console.log(to);
  };
  
    return(
      <div>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
          Test 1
        </Link>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link>
        <Button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </Button>

        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>

        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">
            first element inside container
          </Element>

          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div>

        <button onClick={scrollToTop}>To the top!</button>
        <br/>
        <button onClick={scrollToBottom}>To the bottom!</button>
        <br/>
        <button onClick={scrollTo}>Scroll to 100px from the top</button>
        <br/>
        <button onClick={scrollMore}>Scroll 100px more from the current position!</button>
      </div>
    );
}*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
