import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { cardHoverVariants } from './variants'

interface MotionCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  hoverable?: boolean
}

const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
  ({ children, hoverable = true, variants = cardHoverVariants, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileHover={hoverable ? "hover" : undefined}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

MotionCard.displayName = 'MotionCard'

export default MotionCard
