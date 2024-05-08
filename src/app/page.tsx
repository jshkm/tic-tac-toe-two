"use client";
import { motion } from 'framer-motion'
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
          animateTitle()
          return count;
        }
        console.log(count % fonts.length)
        setFont(fonts[count % fonts.length])
        return count + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(start)
    console.log('lucky duck')
  })

  const animateTitle = () => {
    setFont(' bit')
    setStart(true);
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <motion.h1 initial={ start ? {scale: 0} : {scale : 0}} animate={{scale: 1}} transition={{type: "spring", stiffness: 90, damping: 50}} className={'text-7xl' + font}>Tic Tac Toe 2</motion.h1>
      { start && (
        <Board></Board>
      )}

      <p className='bit'>made by josh</p>
    </div>
  );
}


