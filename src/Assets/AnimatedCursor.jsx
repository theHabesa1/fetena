import React, { useState, useEffect } from 'react';
import './AnimatedCursor.css';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div className="cursor" style={{ left: position.x, top: position.y }}>
        <div className="circle" />
      </div>
    </div>
  );
};

export default AnimatedCursor;
