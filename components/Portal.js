import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { Context } from '../context'

const Portal = ({ children }) => {
  const { mounted } = useContext(Context)
  return mounted
    ? createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ x: '-600px', opacity: 0 }}
            layout
            animate={{
              x: 0,
              opacity: 1,
              transition: { stiffness: 160, type: 'spring', damping: 20 },
            }}
            exit={{ opacity: 0 }}
            className="absolute top-0 z-40 h-screen w-[85vw]  bg-gradient-to-t from-[#30cfd0] to-[#330867]"
          >
            <div className="relative flex h-full items-center justify-center">
              {children}
            </div>
          </motion.div>
        </AnimatePresence>,
        document.querySelector('#myportal')
      )
    : null
}

export default Portal
