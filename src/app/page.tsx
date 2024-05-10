"use client";
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Board from './board'
export default function Home() {
  const [start, setStart] = useState(false);
  const [font, setFont] = useState(' myFont');
  const fonts = [' jacq', ' inter', ' bit', ' script', ' serif'];
  const [count, setCount] = useState(0);
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)

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
    console.log(xWins)
    console.log('lucky duck')
  })

  const animateTitle = () => {
    setFont(' bit')
    setStart(true);
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {!start && (<h1 className={'text-7xl' + font}>Tic Tac Toe 2</h1>)}
      { start && (
        <>
          <motion.h1 initial={{ y: '-100%' }} animate={{y:'0%'}} className={'text-7xl' + font}>Tic Tac Toe 2</motion.h1>
          <Board setXWins={setXWins} setOWins={setOWins} xWins={xWins} oWins={oWins}></Board>
          <div className={'flex flex-row justify-around items-end w-screen text-6xl' + font}>
            <motion.div initial={{x: '-100%'}} animate={{x:0}}>Player X: {xWins}</motion.div>
            <p className='text-xl'>made by josh</p>
            <motion.div initial={{x: '100%'}} animate={{x:0}}>Player O: {oWins}</motion.div>
          </div>
        </>
      )}

      { !start && (<p className='text-xl bit'>made by josh</p>)}
    </div>
  );
}

