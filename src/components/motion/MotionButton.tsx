import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { buttonPressVariants } from './variants'

interface MotionButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode
}

const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, variants = buttonPressVariants, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        variants={variants}
        whileTap="tap"
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

MotionButton.displayName = 'MotionButton'

export default MotionButton
