import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    const handleScroll = () => {
      const rect = textElement?.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect && rect.top <= windowHeight) {
        let currentText = '';
        let currentIndex = 0;

        const interval = setInterval(() => {
          if (currentIndex === text.length) {
            clearInterval(interval);
          } else {
            currentText += text[currentIndex];
            setDisplayText(currentText);
            currentIndex++;
          }
        }, 100);

        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [text]);

  return <div className='AnimatedText_1'><span ref={textRef}>{displayText}</span></div>;
};

export default AnimatedText;



/*import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  delay: number;
  animationDuration: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay, animationDuration }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>('');
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (isVisible && currentIndex < text.length) {
        currentText += text[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [isVisible, text, delay]);

  return <span ref={textRef} style={{ animationDuration }}>{displayText}</span>;
};

export default AnimatedText; */