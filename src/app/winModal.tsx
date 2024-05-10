import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import X from '../../public/x.svg'
import O from '../../public/o.svg'

function Win({ isWin, setIsWin, init, winner }) {

  const restart = () => {
    setIsWin(false)
    init()
  }

  return (
    <Dialog open={isWin} onClose={() => restart()}>
      <div className="text-white fixed inset-0 flex  items-center justify-center w-screen backdrop">
        <DialogPanel className="flex flex-col items-center justify-center min-h-80 h-1/2 aspect-square text-center">
          <Image className='' src={winner} style={{objectFit:"contain"}} alt='piece'></Image>
          <p className='bit font-bold text-9xl'>Wins!</p>
          <button className='bit text-2xl' onClick={() => restart()}>restart</button>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Win