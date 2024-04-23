"use client";
import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    console.log('turn ' + turn)
  }, [])

  const [turn, setTurn] = useState(1)
  const [board, setBoard] = useState([[X, null, null,], [null, null, null], [null, null, null]])
  
  const setPiece = () => {
    console.log('setpiece')
    setVisible(' visible')
  }

  const [visible, setVisible] = useState(' invisible')

  const Tiles = ({ piece }) => (
    <div className='flex bg-black h-full aspect-square'>
      <button onClick={setPiece}>
        <Image className={'hover:scale-125' + visible}  src={piece} width={500} alt='xsvg'></Image>
      </button>
    </div>
  );

  return (
    <>
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-2'>
        {board.map(b0 => (
          b0.map(b1 => (
            <Tiles piece={X}></Tiles>
            // <div className={'border-2 border-rose-300 ' + visible}></div>
          ))
        ))}
      </div>
    </div>
    {/* <button onClick={() => setVisible('bg-red-500')} className='text-white'>push me</button> */}
    </>
  );
}


