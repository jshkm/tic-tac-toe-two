import { motion } from 'framer-motion'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { useEffect } from 'react'

interface DropProps {
  font: string;
  fonts: string[];
  setFont: Function;
  setFonts: Function;
}

interface setDropdownProps {
  i: number;
}

function Drop({font, fonts, setFont, setFonts} : DropProps) {

  useEffect(() => {
    console.log('font')
    console.log(fonts)
  }, [font])

  const setDropdown = ({i} : setDropdownProps) => {
    let tmp = fonts[0]
    fonts[0] = fonts[i]
    fonts[i] = tmp
    console.log(fonts)
    setFont(fonts[0])
    setFonts(fonts)
  }


  return (
      <Menu>
        <motion.div whileHover={{opacity: .5}}>
          <MenuButton className={'text-7xl' + font} >Tic Tac Toe 2</MenuButton>
        </motion.div>
          <Transition
            enter="duration-200 ease-out"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="duration-300 ease-out"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <MenuItems anchor="bottom" className="flex flex-col h-full w-full backdrop origin-top transition hide-y">
              <MenuItem>
                <motion.button whileHover={{scale: 1.1}}  className={'text-6xl' + fonts[1]} onClick={() => setDropdown({i: 1})}>Tic Tac Toe 2</motion.button>
              </MenuItem>
              <MenuItem>
                <motion.button whileHover={{scale: 1.1}} className={'text-6xl' + fonts[2]} onClick={() => setDropdown({i: 2})}>Tic Tac Toe 2</motion.button>
              </MenuItem>
              <MenuItem>
                <motion.button whileHover={{scale: 1.1}} className={'text-6xl' + fonts[3]} onClick={() => setDropdown({i: 3})}>Tic Tac Toe 2</motion.button>
              </MenuItem>
              <MenuItem>
                <motion.button whileHover={{scale: 1.1}} className={'text-6xl' + fonts[4]} onClick={() => setDropdown({i: 4})}>Tic Tac Toe 2</motion.button>
              </MenuItem>
              <MenuItem>
                {({ close }) => (
                  <motion.button whileHover={{scale: 1.1}} className='text-3xl bit' onClick={close}>return</motion.button>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
      </Menu>
  )
}

export default Drop