"use client";
// import X from '../../public/x.svg'
// import O from '../../public/o.svg'
import Win from './winModal'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Board({setXWins, setOWins, xWins, oWins, turn, setTurn, font, xColor, setXColor, yColor, setYColor}) {
  class Piece {
    constructor(src, color, i, j) {
      this.src = src;
      this.color = color;
      this.i = i;
      this.j = j;
    }
  }

  const X = 'X'
  const O = 'O'
  
  const none = new Piece(null, 0, '', null, null)
  const [X1, setX1] = useState(new Piece(X, xColor, 0, 0))
  const [X2, setX2] = useState(new Piece(X, xColor, 0, 0))
  const [X3, setX3] = useState(new Piece(X, xColor, 0, 0))
  
  const [O1, setO1] = useState(new Piece(O, yColor, 0, 0))
  const [O2, setO2] = useState(new Piece(O, yColor, 0, 0))
  const [O3, setO3] = useState(new Piece(O, yColor, 0, 0))

  const [tmpX, setTmpX] = useState(new Piece(X, ' animate-pulse grayscale-[.85] brightness-200' + xColor, null, null))
  const [tmpO, setTmpO] = useState(new Piece(O, ' animate-pulse grayscale-[.85] brightness-200' + yColor, null, null))

  const [random, setRandom] = useState(0)

  const [board, setBoard] = useState([[none, none, none,], [none, none, none], [none, none, none]])
  const [Xpool, setXpool] = useState([X3, X2, X1])
  const [Opool, setOpool] = useState([O3, O2, O1])

  const [isWin, setIsWin] = useState(false)
  const [winner, setWinner] = useState(none)

  useEffect(() => {
    updateScore()
    console.log('render')
  }, [winner])

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
    setWinner(none)
  }

  const checkWin = () => {
    if (board[0][0].src != null && board[0][0].src == board[0][1].src && board[0][0].src == board[0][2].src) {
      // first row
      console.log('win!')
      setIsWin(true)
      setWinner(board[0][0])
    } else if (board[1][0].src != null && board[1][0].src == board[1][1].src && board[1][0].src == board[1][2].src) {
      // second row
      console.log('win!')
      setIsWin(true)
      setWinner(board[1][0])
    } else if (board[2][0].src != null && board[2][0].src == board[2][1].src && board[2][0].src == board[2][2].src) {
      // third row
      console.log('win!')
      setIsWin(true)
      setWinner(board[2][0])
    } else if (board[0][0].src != null && board[0][0].src == board[1][0].src && board[0][0].src == board[2][0].src) {
      // first col
      console.log('win!')
      setIsWin(true)
      setWinner(board[0][0])
    } else if (board[0][1].src != null && board[0][1].src == board[1][1].src && board[0][1].src == board[2][1].src) {
      // second col
      console.log('win!')
      setIsWin(true)
      setWinner(board[0][1])
    } else if (board[0][2].src != null && board[0][2].src == board[1][2].src && board[0][2].src == board[2][2].src) {
      // third col
      console.log('win!')
      setIsWin(true)
      setWinner(board[0][2])
    } else if (board[0][0].src != null && board[0][0].src == board[1][1].src && board[0][0].src == board[2][2].src) {
      // left diag
      console.log('win!')
      setIsWin(true)
      setWinner(board[0][0])
    } else if (board[2][0].src != null && board[2][0].src == board[1][1].src && board[2][0].src == board[0][2].src) {
      // right diag
      console.log('win!')
      setIsWin(true)
      setWinner(board[2][0])
    }
  }

  const checkNextPiece = async () => {
    if (turn == O) {
      if (tmpO.i != null && tmpO.j != null) {
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
      if (tmpX.i != null && tmpX.j != null) {
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
  }

  const setPiece = (i, j) => {
    if (board[i][j].src == null && (Xpool.length > 0 || Opool.length > 0)) {
      if (turn == X) {
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
      setTurn(turn == X ? O : X)
    }

    if (Xpool.length == 0 && Opool.length == 0) {
      checkNextPiece()
    }

    setBoard(board)
    checkWin()
    console.log('finished')
  }

  const updateScore = () => {
    if (winner.src == X) {
      setXWins(xWins + 1)
      console.log(xWins)
    } else if (winner.src == O) {
      setOWins(oWins + 1)
      console.log(oWins)
    }
  }

  const Tiles = ({ piece, i, j }) => (
    <div className='flex bg-black h-full aspect-square'>
      <motion.button whileHover={{ scale: 1.2 }} className={'h-full aspect-square' + piece.color} onClick={() => setPiece(i, j)}>
        { piece.src ? (
          <div className={'font-scale' + font}>{piece.src}</div>
        ) : (
          <div className='h-full aspect-square'></div>
        )}
      </motion.button>
    </div>
  );

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{type: "spring", stiffness: 400, damping: 38}} className='flex items-center justify-center h-5/6 w-full'>
      <div className='bg-white h-3/4 aspect-square grid min-h-80 grid-cols-3 gap-2'>
        {board.map((row, i) => (
          row.map((col, j) => (
            <Tiles piece={col} i={i} j={j} key={`${i}-${j}`}></Tiles>
          ))
        ))}
      </div>
      <Win isWin={isWin} setIsWin={setIsWin} init={init} winner={winner} font={font}></Win>
    </motion.div>
  );
}

export default Board;