"use client";
import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    console.log('turn ' + turn)
  }, [])

  const [turn, setTurn] = useState('X')
  

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-2'>
        <Tiles piece={X}></Tiles>
        <Tiles piece={X}></Tiles>
        <Tiles piece={O}></Tiles>
        <Tiles piece={X}></Tiles>
        <Tiles piece={X}></Tiles>
        <Tiles piece={X}></Tiles>
        <Tiles piece={X}></Tiles>
        <Tiles piece={X}></Tiles>
        <Tiles piece={X}></Tiles>
      </div>
    </div>
  );
}

const Tiles = ({ piece }) => (
    <div className='flex bg-black h-full aspect-square'>
      <Image src={piece} width={500} alt='xsvg'></Image>
    </div>
);
