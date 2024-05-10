import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'

function Win({ isWin, setIsWin, init, winner, font }) {

  const restart = () => {
    setIsWin(false)
    init()
  }

  return (
    <Dialog open={isWin} onClose={() => restart()}>
      <div className="text-white fixed inset-0 flex  items-center justify-center w-screen backdrop">
        <DialogPanel className="flex flex-col items-center justify-center min-h-80 h-1/2 aspect-square text-center">
          <div className={'font-scale scale-150' + winner.color + font}>{winner.src}</div>
          <p className={'font-bold text-9xl' + font}>Wins!</p>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Win