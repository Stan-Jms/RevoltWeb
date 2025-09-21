import type { Variants } from 'framer-motion'

// Check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false

// Global motion timing and easing
export const motionConfig = {
  duration: {
    fast: prefersReducedMotion ? 0.01 : 0.2,
    normal: prefersReducedMotion ? 0.01 : 0.35,
    slow: prefersReducedMotion ? 0.01 : 0.5,
  },
  easing: prefersReducedMotion ? [0, 0, 0, 1] : [0.16, 1, 0.3, 1] as const,
  spring: {
    stiffness: prefersReducedMotion ? 1000 : 260,
    damping: prefersReducedMotion ? 100 : 28,
  },
}

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: motionConfig.duration.fast,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Fade in variants
export const fadeInVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Slide up variants
export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Scale in variants
export const scaleInVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Stagger container variants
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08, // 80ms stagger
    },
  },
}

// Stagger item variants
export const staggerItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Button press variants
export const buttonPressVariants: Variants = {
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
}

// Card hover variants
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  hover: {
    y: -3,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Modal backdrop variants
export const backdropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.6,
    transition: {
      duration: motionConfig.duration.normal,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: motionConfig.duration.fast,
      ease: Array.isArray(motionConfig.easing) ? (t => t) : motionConfig.easing,
    },
  },
}

// Modal panel variants
export const modalPanelVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: motionConfig.spring.stiffness,
      damping: motionConfig.spring.damping,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: motionConfig.duration.fast,
      ease: motionConfig.easing as any,
    },
  },
}

// Toast variants
export const toastVariants: Variants = {
  initial: {
    opacity: 0,
    x: 300,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: motionConfig.spring.stiffness,
      damping: motionConfig.spring.damping,
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    scale: 0.95,
    transition: {
      duration: motionConfig.duration.fast,
      ease: motionConfig.easing as any,
    },
  },
}

// Utility function to create staggered animations
export const makeStagger = (delay: number = 0.08) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
})

// Utility function for scroll-triggered animations
export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing as any,
    },
  },
}
