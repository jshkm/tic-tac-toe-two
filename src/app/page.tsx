"use client";
import React, { useState, useEffect } from 'react'
import Board from './board'
export default function Home() {
  const [start, setStart] = useState(false)
  const [font, setFont] = useState(' myFont')
  let count = 0
  const fonts = [' myFont', ' inter']
  const interval = setInterval(() => startAnimate(), 500)

  useEffect(() => {
    console.log('start')
  }, [])

  const startAnimate = () => {
    if (count > 5) {
      clearInterval(interval)
      setStart(true)
      setFont(' myFont')
    } else {
      // setFont(fonts[count % fonts.length])
      count += 1
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className={'text-7xl' + font}>Tic Tac Toe 2</h1>
      { start ? (
        <Board></Board>
      ) : (
        <div></div>
      )}
      <p className='myFont'>made by josh</p>
    </div>
  );
}


