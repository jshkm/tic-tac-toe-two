import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'

function Win({ isWin, setIsWin }) {

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog open={isWin} onClose={() => setIsWin(false)} className="relative z-50">
        <div className="text-black fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">You Win!</DialogTitle>
            <div className="flex gap-4">
              <button onClick={() => setIsWin(false)}>Play Again!</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default Win