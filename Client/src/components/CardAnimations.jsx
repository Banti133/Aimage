import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const CardAnimations = ({ children }) => {
  const [props, set] = useSpring(() => ({
    from: { opacity: 0, transform: 'translate3d(0, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  }));

  useEffect(() => {
    set({ opacity: 1, transform: 'translate3d(0, 0, 0)' });
  }, []);

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};

export default CardAnimations;