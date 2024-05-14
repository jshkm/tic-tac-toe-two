"use client";
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Board from './board'
import Drop from './dropdown'
import Color from './colorModal'

export default function Home() {
  const X = 'X'
  const O = 'O'
  const [start, setStart] = useState(false);
  const [font, setFont] = useState(' myFont');
  const [fonts, setFonts] = useState([' bit', ' jacq', ' inter', ' script', ' serif']);
  const [count, setCount] = useState(0);
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)
  const [turn, setTurn] = useState(X)
  const [xColor, setXColor] = useState(' text-red-500')
  const [oColor, setOColor] = useState(' text-blue-800')
  const bgColors = [' bg-red-500', ' bg-orange-300', ' bg-amber-200', ' bg-green-900', ' bg-blue-800', ' bg-fuchsia-400']
  const txtColors = [' text-red-500', ' text-orange-300', ' text-amber-200', ' text-green-900', ' text-blue-800', ' text-fuchsia-400']

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
    // console.log(xColor)
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
          <motion.div initial={{ y: '-100%' }} animate={{y:'0%'}}>
            <Drop font={font} fonts={fonts} setFont={setFont} setFonts={setFonts}></Drop>
          </motion.div>
          <Board setXWins={setXWins} setOWins={setOWins} xWins={xWins} oWins={oWins} turn={turn} setTurn={setTurn} font={font} xColor={xColor} setXColor={setXColor} oColor={oColor} setOColor={setOColor}></Board>
          <div className={'flex flex-row justify-around items-end w-full text-6xl' + font}>
            <motion.div className={`${turn == O && 'opacity-20'}`} initial={{x: '-100%'}} animate={{x:0}}>
              <Color piece={X} wins={xWins} bgColors={bgColors} txtColors={txtColors} font={font} xColor={xColor} setXColor={setXColor} oColor={oColor} setOColor={setOColor} start={0}></Color>
            </motion.div>
            <p className='text-xl bit'>made by josh</p>
            <motion.div className={`${turn == X && 'opacity-20'}`} initial={{x: '100%'}} animate={{x:0}}>
              <Color piece={O} wins={oWins} bgColors={bgColors} txtColors={txtColors} font={font} xColor={xColor} setXColor={setXColor} oColor={oColor} setOColor={setOColor} start={4}></Color>
            </motion.div>
          </div>
        </>
      )}

      { !start && (<p className='text-xl bit'>made by josh</p>)}
    </div>
  );
}