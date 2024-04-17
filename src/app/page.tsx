import XSVG from '/x.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-4 place-content-between'>
        <Tiles piece={<Image src={'/x.svg'} width={500} height={500} alt='xsvg'></Image>}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
        <Tiles piece={'x'}></Tiles>
      </div>
    </div>
    // <>
    //   <Image src='/x.svg' width={500} height={500}></Image>
    // </>
  );
}

const Tiles = ({ piece }) => (
  <p className='text-white text-center text-8xl bg-black h-full aspect-square'>
    {piece}
  </p>
);

import React, { useState } from 'react';
