"use client";
import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [turn, setTurn] = useState(X)
  const [board, setBoard] = useState([[null, null, null,], [null, null, null], [null, null, null]])
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    console.log('render')
  })

  const setPiece = (i, j) => {
    board[i][j] = turn
    setBoard(board)
    setTurn(turn == X ? O : X)
  }

  const Tiles = ({ piece, i, j }) => (
    <div className='flex bg-black h-full aspect-square'>
      <button className='h-full aspect-square' onClick={() => setPiece(i, j)}>
        { piece ? (
          <Image className={'hover:scale-125'}  src={piece} width={500} alt='piece'></Image>
        ) : (
          <div className='h-full aspect-square'></div>
        )}
      </button>
    </div>
  );

  return (
    <>
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className='bg-white h-2/3 aspect-square grid min-h-80 grid-cols-3 gap-2'>
          {board.map((row, i) => (
            row.map((col, j) => (
              <Tiles piece={col} i={i} j={j}></Tiles>
              // <div className={'border-2 border-rose-300 ' + visible}></div>
            ))
          ))}
        </div>
      </div>
    {/* <button onClick={() => setVisible(1)} className='text-white'>
      <div className='h-4 w-4'></div>
    </button>
    { visible ? (
      <div className='text-white'>hello world</div>
      ) : (
      <div className='text-white'>pee pee</div>
      )
    } */}
    </>
  );
}


