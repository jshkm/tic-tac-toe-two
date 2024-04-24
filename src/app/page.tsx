"use client";
import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [turn, setTurn] = useState(X)
  const [board, setBoard] = useState([[null, null, null,], [null, null, null], [null, null, null]])
  const [pool, setPool] = useState(6)

  useEffect(() => {
    console.log('render')
  })

  const init = () => {
    console.log('init')
    setTurn(X)
    setBoard([[null, null, null,], [null, null, null], [null, null, null]])
    setPool(6)
  }

  const checkWin = () => {
    if (board[0][0] != null && board[0][0] == board[0][1] && board[0][0] == board[0][2]) {
      // first row
      console.log('win!')
      init()
    } else if (board[1][0] != null && board[1][0] == board[1][1] && board[1][0] == board[1][2]) {
      // second row
      console.log('win!')
      init()
    } else if (board[2][0] != null && board[2][0] == board[2][1] && board[2][0] == board[2][2]) {
      // third row
      console.log('win!')
      init()
    } else if (board[0][0] != null && board[0][0] == board[1][0] && board[0][0] == board[2][0]) {
      // first col
      console.log('win!')
      init()
    } else if (board[0][1] != null && board[0][1] == board[1][1] && board[0][1] == board[2][1]) {
      // second col
      console.log('win!')
      init()
    } else if (board[0][2] != null && board[0][2] == board[1][2] && board[0][2] == board[2][2]) {
      // third col
      console.log('win!')
      init()
    } else if (board[0][0] != null && board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
      // left diag
      console.log('win!')
      init()
    } else if (board[2][0] != null && board[2][0] == board[1][1] && board[2][0] == board[0][2]) {
      // right diag
      console.log('win!')
      init()
    }
  }

  const setPiece = (i, j) => {
    if(board[i][j] == null && pool > 0) {
      board[i][j] = turn
      checkWin()
      setPool(pool - 1)
      setBoard(board)
      setTurn(turn == X ? O : X)
    } 
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
    <button onClick={init} className='flex justify-center items-center w-screen text-black'>
      <div className='bg-white h-8'>RESTART</div>
    </button>
    {/* { visible ? (
      <div className='text-white'>hello world</div>
      ) : (
      <div className='text-white'>pee pee</div>
      )
    } */}
    </>
  );
}


