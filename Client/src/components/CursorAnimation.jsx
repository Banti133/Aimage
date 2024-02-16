import React, { useEffect,useState, useRef } from 'react';
      import gsap from 'gsap';
      
      const CursorAnimation = () => {
        const cursor = useRef(null);
        const [coords, setCoords] = useState({ x: 0, y: 0 });
      
        const mouseMoveHandler = (e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        };
      
        const mouseDownHandler = () => {
          gsap.to(cursor.current, { duration: 0.3, scale: 1.5 });
        };
      
        const mouseUpHandler = () => {
          gsap.to(cursor.current, { duration: 0.3, scale: 1 });
        };
      
        const followMouse = (x, y) => {
          gsap.to(cursor.current, { duration: 0.3, x: x - 10, y: y - 10 });
        };
      
        useEffect(() => {
            if (cursor.current) {
              gsap.delayedCall(0.1, () => {
                gsap.to(cursor.current, { duration: 0.3, x: coords.x - 10, y: coords.y - 10 });
              });
            }
          }, [coords]);
      
        return (
          <div className="fixed top-0 left-0 z-50">
            <div
              ref={cursor}
              className="fixed w-5 h-5 bg-[#000] rounded-full shadow-lg pointer-events-none transition-all duration-300"
            ></div>
            <div
              onMouseMove={mouseMoveHandler}
              onMouseDown={mouseDownHandler}
              onMouseUp={mouseUpHandler}
              className="cursor-none relative z-0"
            ></div>
          </div>
        );
      };
      
      export default CursorAnimation;