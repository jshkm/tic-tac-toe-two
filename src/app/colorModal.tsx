import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ColorProps {
    piece: string;
    wins: number;
    bgColors: string[];
    txtColors: string[];
    font: string;
    xColor: string;
    setXColor: Function;
    oColor: string;
    setOColor: Function;
    start: number;
}

interface selectColorProps {
    i: number;
}

function Color({piece, wins, bgColors, txtColors, font, xColor, setXColor, oColor, setOColor, start} : ColorProps) {

    let [isOpen, setIsOpen] = useState(false)
    let [idx, setIdx] = useState(start)

    const selectColor = ({i} : selectColorProps) => {
        console.log(i)
        if (piece == 'X') {
            setXColor(txtColors[i])
            console.log(txtColors[i])
        } else {
            setOColor(txtColors[i])
        }
        setIdx(i)
    }

    return (
    <>
        <motion.button whileHover={{opacity: .5}} onClick={() => setIsOpen(true)}>Player {piece}: {wins}</motion.button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-white fixed inset-0 flex flex-col items-center justify-center h-screen w-screen backdrop">
            <div className={'font-scale scale-75' + font}>Set Color for {piece}</div>
            <DialogPanel className="grid grid-cols-3 gap-20 min-h-80 h-1/2">
                {bgColors.map((color, i) => (
                    <motion.button whileHover={{scale: 1.1}} className={`h-3/4 aspect-square ${i == idx && 'border'}` + color} onClick={() => selectColor({i})} key={i}></motion.button>
                ))}
            </DialogPanel>
        </div>
        </Dialog>
    </>
    )
}

export default Color