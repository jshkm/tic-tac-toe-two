"use client";
import X from '../../public/x.svg'
import O from '../../public/o.svg'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Board() {
  class Piece {
    constructor(src, chosen, i, j) {
      this.src = src;
      this.chosen = chosen;
      this.i = i;
      this.j = j;
    }
  }

  const none = new Piece(null, 0, '', null, null)
  const [X1, setX1] = useState(new Piece(X, '', 0, 0))
  const [X2, setX2] = useState(new Piece(X, '', 0, 0))
  const [X3, setX3] = useState(new Piece(X, '', 0, 0))
  
  const [O1, setO1] = useState(new Piece(O, '', 0, 0))
  const [O2, setO2] = useState(new Piece(O, '', 0, 0))
  const [O3, setO3] = useState(new Piece(O, '', 0, 0))

  const [tmpX, setTmpX] = useState(new Piece(X, ' brightness-50', null, null))
  const [tmpO, setTmpO] = useState(new Piece(O, ' brightness-50', null, null))

  const [random, setRandom] = useState(0)

  const [turn, setTurn] = useState(X)
  const [board, setBoard] = useState([[none, none, none,], [none, none, none], [none, none, none]])
  const [Xpool, setXpool] = useState([X3, X2, X1])
  const [Opool, setOpool] = useState([O3, O2, O1])
  

  useEffect(() => {
    console.log('render')
  })

  const init = () => {
    console.log('init')
    tmpX.i = null
    tmpX.j = null
    tmpO.i = null
    tmpO.j = null
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

  const checkNextPiece = async () => {
    console.log(turn)

    if (turn == O) {
      console.log(tmpO.i)
      console.log(tmpO.j)
      if (tmpO.i != null && tmpO.j != null) {
        console.log('reset')
        board[tmpO.i][tmpO.j] = none
      }

      setRandom(Math.floor(Math.random() * 3))

      let tmp = [X1, X2, X3].at(random)
      let i = tmp.i
      let j = tmp.j

      tmpX.i = i
      tmpX.j = j

      board[i][j] = tmpX
      Xpool.push(tmp)
    } else {

      console.log(tmpX.i)
      console.log(tmpX.j)

      if (tmpX.i != null && tmpX.j != null) {
        console.log('resetX')
        board[tmpX.i][tmpX.j] = none
      }
      
      setRandom(Math.floor(Math.random() * 3))

      let tmp = [O1, O2, O3].at(random)
      let i = tmp.i
      let j = tmp.j

      tmpO.i = i
      tmpO.j = j

      board[i][j] = tmpO
      Opool.push(tmp)
    }
    setBoard(board)
    console.log(board)
  }

  const setPiece = (i, j) => {
    if (board[i][j].src == null && (Xpool.length > 0 || Opool.length > 0)) {
      if (turn  == X) {
        let tmpX = Xpool.pop()
        tmpX.i = i
        tmpX.j = j
        board[i][j] = tmpX
        setXpool(Xpool)
      } else {
        let tmpO = Opool.pop()
        tmpO.i = i
        tmpO.j = j
        board[i][j] = tmpO
        setOpool(Opool)
      }
    }

    if (Xpool.length == 0 && Opool.length == 0) {
      checkNextPiece()
    }
    // console.log(Xpool)
    // console.log(Opool)
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
    <div className='flex items-center justify-center h-5/6 w-full'>
      <div className='bg-white h-3/4 aspect-square grid min-h-80 grid-cols-3 gap-2'>
        {board.map((row, i) => (
          row.map((col, j) => (
            <Tiles piece={col} i={i} j={j}></Tiles>
          ))
        ))}
      </div>
    </div>
  );
}