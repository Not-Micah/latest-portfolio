"use client";

import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface BackgroundPixelsProps {
    className?: string;
}

const BackgroundPixels: React.FC<BackgroundPixelsProps> = ({ className }) => {
  const [boxCount, setBoxCount] = useState<{ rows: number; cols: number }>({ rows: 0, cols: 0 });
  const shades = [
    '#080808', '#111111', '#1a1a1a', '#242424', '#2d2d2d',
    '#363636', '#404040', '#4a4a4a', '#535353', '#5d5d5d',
  ];  
  
  useEffect(() => {
    const updateBoxCount = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / 50); 
      const rows = Math.ceil(height / 50); 
      setBoxCount({ rows, cols });
    };

    updateBoxCount(); 
    window.addEventListener('resize', updateBoxCount); 
    return () => window.removeEventListener('resize', updateBoxCount); 
  }, []);

  const generateBoxes = () => {
    const boxes = [];
    const { rows, cols } = boxCount;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const randomShade = shades[Math.floor(Math.random() * shades.length)];
        boxes.push(
          <div
            key={`${row}-${col}`}
            className="
            w-[50px] h-[50px]
            opacity-[5%]"
            style={{ backgroundColor: randomShade }}
          />
        );
      }
    }

    return boxes;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxCount((prev) => ({ ...prev })); 
    }, 500);

    // Cleanup interval
    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      className={twMerge("grid relative", className)}
      style={{
        gridTemplateColumns: `repeat(${boxCount.cols}, 50px)`,
        gridTemplateRows: `repeat(${boxCount.rows}, 50px)`
      }}
    >
      {generateBoxes()}
    </div>
  );
};

export default BackgroundPixels;
