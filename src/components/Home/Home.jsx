import React from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';
import Slider from '../slider/Slider';

const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.section style={props} className="home" id="home">
      <Slider />
    </animated.section>
  );
};

export default Home;
