import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode
}

const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    )
  }
)

MotionSection.displayName = 'MotionSection'

export default MotionSection
