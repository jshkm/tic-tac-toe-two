"use client";
import React, { useState, useEffect } from 'react'
import Board from './board'
export default function Home() {
  const [start, setStart] = useState(false);
  const [font, setFont] = useState(' myFont');
  const fonts = [' jacq', ' inter', ' bit', ' script', ' serif'];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => {
        if (count >= 15) {
          clearInterval(interval);
          setStart(true);
          setFont(' bit')
          return count;
        }
        console.log(count % fonts.length)
        setFont(fonts[count % fonts.length])
        return count + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className={'text-7xl' + font}>Tic Tac Toe 2</h1>
      { start ? (
        <Board></Board>
      ) : (
        <div></div>
      )}
      <p className='bit'>made by josh</p>
    </div>
  );
}


