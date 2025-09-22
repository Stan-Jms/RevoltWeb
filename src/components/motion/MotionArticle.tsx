import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface MotionArticleProps extends HTMLMotionProps<'article'> {
  children: React.ReactNode
}

const MotionArticle = forwardRef<HTMLElement, MotionArticleProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.article ref={ref} {...props}>
        {children}
      </motion.article>
    )
  }
)

MotionArticle.displayName = 'MotionArticle'

export default MotionArticle
