import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-4'>
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

import React, { useState } from 'react';
