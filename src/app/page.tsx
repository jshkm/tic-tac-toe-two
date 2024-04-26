"use client";
import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Home() {
  class Piece {
    constructor(src, id, chosen) {
      this.src = src;
      this.id = id;
      this.chosen = chosen;
    }
  }

  const none = new Piece(null, 0, '')
  const [X1, setX1] = useState(new Piece(X, 1, ''))
  const [X2, setX2] = useState(new Piece(X, 2, ''))
  const [X3, setX3] = useState(new Piece(X, 3, ''))
  
  const [O1, setO1] = useState(new Piece(O, 1, ''))
  const [O2, setO2] = useState(new Piece(O, 2, ''))
  const [O3, setO3] = useState(new Piece(O, 3, ''))

  const [turn, setTurn] = useState(X)
  const [board, setBoard] = useState([[none, none, none,], [none, none, none], [none, none, none]])
  const [Xpool, setXpool] = useState([X3, X2, X1])
  const [Opool, setOpool] = useState([O3, O2, O1])
  

  useEffect(() => {
    console.log('render')
  })

  const init = () => {
    console.log('init')
    setTurn(X)
    setBoard([[none, none, none,], [none, none, none], [none, none, none]])
    setXpool([X3, X2, X1])
    setOpool([O3, O2, O1])
  }

  const checkWin = () => {
    if (board[0][0].src != null && board[0][0].src == board[0][1].src && board[0][0].src == board[0][2].src) {
      // first row
      console.log('win!')
      init()
    } else if (board[1][0].src != null && board[1][0].src == board[1][1].src && board[1][0].src == board[1][2].src) {
      // second row
      console.log('win!')
      init()
    } else if (board[2][0].src != null && board[2][0].src == board[2][1].src && board[2][0].src == board[2][2].src) {
      // third row
      console.log('win!')
      init()
    } else if (board[0][0].src != null && board[0][0].src == board[1][0].src && board[0][0].src == board[2][0].src) {
      // first col
      console.log('win!')
      init()
    } else if (board[0][1].src != null && board[0][1].src == board[1][1].src && board[0][1].src == board[2][1].src) {
      // second col
      console.log('win!')
      init()
    } else if (board[0][2].src != null && board[0][2].src == board[1][2].src && board[0][2].src == board[2][2].src) {
      // third col
      console.log('win!')
      init()
    } else if (board[0][0].src != null && board[0][0].src == board[1][1].src && board[0][0].src == board[2][2].src) {
      // left diag
      console.log('win!')
      init()
    } else if (board[2][0].src != null && board[2][0].src == board[1][1].src && board[2][0].src == board[0][2].src) {
      // right diag
      console.log('win!')
      init()
    }
  }

  const checkNextPiece = () => {
    console.log('check next peice')
    console.log(turn)
    if (turn == O) {
      let tmp = [X1, X2, X3].at(Math.floor(Math.random() * 3))
      tmp.chosen = ' brightness-50'
      Xpool.push(tmp)
    } else {
      let tmp = [O1, O2, O3].at(Math.floor(Math.random() * 3))
      tmp.chosen = ' brightness-50'
      Xpool.push(tmp)
    }
  }

  const setPiece = (i, j) => {
    if (board[i][j].src == null && (Xpool.length > 0 || Opool.length > 0)) {
      if (turn  == X) {
        board[i][j] = Xpool.pop()
        setXpool(Xpool)
      } else {
        board[i][j] = Opool.pop()
        setOpool(Opool)
      }
    }

    if (Xpool.length == 0 && Opool.length == 0) {
      checkNextPiece()
    }
    
    setBoard(board)
    setTurn(turn == X ? O : X)
    checkWin()
  }

  const Tiles = ({ piece, i, j }) => (
    <div className='flex bg-black h-full aspect-square'>
      <button className={'h-full aspect-square' + piece.chosen} onClick={() => setPiece(i, j)}>
        { piece.src ? (
          <Image className={'hover:scale-125'}  src={piece.src} width={500} alt='piece'></Image>
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
    {/* <button onClick={init} className='flex justify-center items-center w-screen text-black'>
      <div className='bg-white h-8'>RESTART</div>
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


