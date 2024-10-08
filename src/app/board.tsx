"use client";
import Win from './winModal'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BoardProps {
  setXWins: Function;
  setOWins: Function;
  xWins: number;
  oWins: number;
  turn: string;
  setTurn: Function;
  font: string;
  xColor: string;
  setXColor: Function;
  oColor: string;
  setOColor: Function;
}

interface TilesProps {
  piece: {
    src: string;
    chosen: string;
    i: number;
    j: number;
  };
  i: number;
  j: number;
}

interface setPieceProps {
  i: number;
  j: number;
}

function Board({setXWins, setOWins, xWins, oWins, turn, setTurn, font, xColor, setXColor, oColor, setOColor} : BoardProps) {
  const X = 'X'
  const O = 'O'
  
  const none = {src: '', chosen: '', i: 0, j: 0}
  const [X1, setX1] = useState({src: X, chosen: '', i: 0, j: 0})
  const [X2, setX2] = useState({src: X, chosen: '', i: 0, j: 0})
  const [X3, setX3] = useState({src: X, chosen: '', i: 0, j: 0})
  const [O1, setO1] = useState({src: O, chosen: '', i: 0, j: 0})
  const [O2, setO2] = useState({src: O, chosen: '', i: 0, j: 0})
  const [O3, setO3] = useState({src: O, chosen: '', i: 0, j: 0})
  const [tmpX, setTmpX] = useState({src: X, chosen: ' animate-pulse grayscale-[.85] brightness-200', i: -1, j: -1})
  const [tmpO, setTmpO] = useState({src: O, chosen: ' animate-pulse grayscale-[.85] brightness-200', i: -1, j: -1})

  const [random, setRandom] = useState(0)

  const [board, setBoard] = useState([[none, none, none,], [none, none, none], [none, none, none]])
  const [Xpool, setXpool] = useState([X3, X2, X1])
  const [Opool, setOpool] = useState([O3, O2, O1])

  const [isWin, setIsWin] = useState(false)
  const [winner, setWinner] = useState(none)

  let sound = new Audio('../sound.mp3')
  let winSound = new Audio('../win-sound.mp3')

  useEffect(() => {
    updateScore()
  }, [winner])

  const init = () => {
    tmpX.i = -1
    tmpX.j = -1
    tmpO.i = -1
    tmpO.j = -1
    setTurn(X)
    setBoard([[none, none, none,], [none, none, none], [none, none, none]])
    setXpool([X3, X2, X1])
    setOpool([O3, O2, O1])
    setWinner(none)
  }

  const checkWin = () => {
    if (board[0][0].src != '' && board[0][0].src == board[0][1].src && board[0][0].src == board[0][2].src) {
      // first row
      setIsWin(true)
      setWinner(board[0][0])
      winSound.play()
    } else if (board[1][0].src != '' && board[1][0].src == board[1][1].src && board[1][0].src == board[1][2].src) {
      // second row
      setIsWin(true)
      setWinner(board[1][0])
      winSound.play()
    } else if (board[2][0].src != '' && board[2][0].src == board[2][1].src && board[2][0].src == board[2][2].src) {
      // third row
      setIsWin(true)
      setWinner(board[2][0])
      winSound.play()
    } else if (board[0][0].src != '' && board[0][0].src == board[1][0].src && board[0][0].src == board[2][0].src) {
      // first col
      setIsWin(true)
      setWinner(board[0][0])
      winSound.play()
    } else if (board[0][1].src != '' && board[0][1].src == board[1][1].src && board[0][1].src == board[2][1].src) {
      // second col
      setIsWin(true)
      setWinner(board[0][1])
      winSound.play()
    } else if (board[0][2].src != '' && board[0][2].src == board[1][2].src && board[0][2].src == board[2][2].src) {
      // third col
      setIsWin(true)
      setWinner(board[0][2])
      winSound.play()
    } else if (board[0][0].src != '' && board[0][0].src == board[1][1].src && board[0][0].src == board[2][2].src) {
      // left diag
      setIsWin(true)
      setWinner(board[0][0])
      winSound.play()
    } else if (board[2][0].src != '' && board[2][0].src == board[1][1].src && board[2][0].src == board[0][2].src) {
      // right diag
      setIsWin(true)
      setWinner(board[2][0])
      winSound.play()
    }
  }

  const checkNextPiece = async () => {
    if (turn == O) {
      if (tmpO.i != -1 && tmpO.j != -1) {
        board[tmpO.i][tmpO.j] = none
      }

      setRandom(Math.floor(Math.random() * 3))

      let tmp = [X1, X2, X3].at(random)

      if (tmp != null && tmp.i != null && tmp.j != null) {
        let i = tmp.i
        let j = tmp.j

        tmpX.i = i
        tmpX.j = j

        board[i][j] = tmpX
        Xpool.push(tmp)
      }
    } else {
      if (tmpX.i != -1 && tmpX.j != -1) {
        board[tmpX.i][tmpX.j] = none
      }
      
      setRandom(Math.floor(Math.random() * 3))

      let tmp = [O1, O2, O3].at(random)

      if (tmp != null && tmp.i != null && tmp.j != null) {
        let i = tmp.i
        let j = tmp.j

        tmpO.i = i
        tmpO.j = j

        board[i][j] = tmpO
        Opool.push(tmp)
      }
    }
    setBoard(board)
  }

  const setPiece = ({i, j} : setPieceProps) => {
    if (board[i][j].src == '' && (Xpool.length > 0 || Opool.length > 0)) {
      if (turn == X) {
        let tmpX = Xpool.pop()
        if (tmpX) {
          tmpX.i = i
          tmpX.j = j
          board[i][j] = tmpX
          setXpool(Xpool)
        }
      } else {
        let tmpO = Opool.pop()
        if (tmpO) {
          tmpO.i = i
          tmpO.j = j
          board[i][j] = tmpO
          setOpool(Opool)
        }
      }
      sound.play()
      setTurn(turn == X ? O : X)
    }

    if (Xpool.length == 0 && Opool.length == 0) {
      checkNextPiece()
    }
    
    setBoard(board)
    checkWin()
  }

  const updateScore = () => {
    if (winner.src == X) {
      setXWins(xWins + 1)
    } else if (winner.src == O) {
      setOWins(oWins + 1)
    }
  }

  const [size, setSize] = useState(0);

  useEffect(() => {

    const handleResize = () => {
      const minSize = Math.min(window.innerWidth, window.innerHeight);
      setSize(minSize * 0.9); // Adjust the multiplier as needed for padding
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(window.innerWidth)
  })

  const Tiles = ({ piece, i, j } : TilesProps) => (
    <div className='flex bg-black h-full aspect-square'>
      <motion.button whileHover={{ scale: 1.2 }} className={`h-full aspect-square ${piece.src == X ? xColor : oColor}` + piece.chosen} onClick={() => setPiece({i, j})}>
        { piece.src ? (
          <div className={'font-scale' + font}>{piece.src}</div>
        ) : (
          <div className='h-full aspect-square'></div>
        )}
      </motion.button>
    </div>
  );

  return (
    <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{type: "spring", stiffness: 400, damping: 38}}
      className='flex flex-col items-center justify-center'
      style={{
        width: size,
        height: size,
      }}
    >
      <div className='bg-white h-5/6 min-h-80 grid grid-cols-3 gap-2'>
        {board.map((row, i) => (
          row.map((col, j) => (
            <Tiles piece={col} i={i} j={j} key={`${i}-${j}`}></Tiles>
          ))
        ))}
      </div>
      <Win isWin={isWin} setIsWin={setIsWin} init={init} winner={winner} font={font} xColor={xColor} oColor={oColor}></Win>
    </motion.div>
  );
}

export default Board;