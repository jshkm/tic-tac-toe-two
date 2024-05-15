import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface WinProps {
  isWin: boolean;
  setIsWin: Function;
  init: Function;
  winner: {
    src: string;
    chosen: string;
    i: number;
    j: number;
  };
  font: string;
  xColor: string;
  oColor: string;
}

function Win({ isWin, setIsWin, init, winner, font, xColor, oColor } : WinProps) {

  const restart = () => {
    setIsWin(false)
    init()
  }

  return (
    <Dialog open={isWin} onClose={() => restart()}>
      <div className="text-white fixed inset-0 flex items-center justify-center w-screen backdrop">
        <DialogPanel className="flex flex-col items-center justify-center min-h-80 h-1/6  text-center">
          <div className={`font-scale scale-150 ${winner.src == 'X' ? xColor : oColor}` + font}>{winner.src}</div>
          <p className={'font-bold text-9xl' + font}>Wins!</p>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Win