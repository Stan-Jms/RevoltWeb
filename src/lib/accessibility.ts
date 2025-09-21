// Accessibility utilities for ReVOLT UI

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within a container
   */
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  },

  /**
   * Restore focus to previous element
   */
  restoreFocus: (previousElement: HTMLElement | null) => {
    if (previousElement && typeof previousElement.focus === 'function') {
      previousElement.focus()
    }
  },

  /**
   * Get the currently focused element
   */
  getCurrentFocus: (): HTMLElement | null => {
    return document.activeElement as HTMLElement
  }
}

/**
 * ARIA utilities
 */
export const ariaUtils = {
  /**
   * Generate unique IDs for ARIA relationships
   */
  generateId: (prefix: string = 'revolt'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
  },

  /**
   * Set ARIA attributes for form validation
   */
  setValidationAttributes: (element: HTMLElement, isValid: boolean, message?: string) => {
    element.setAttribute('aria-invalid', (!isValid).toString())
    if (message) {
      element.setAttribute('aria-describedby', message)
    }
  },

  /**
   * Announce changes to screen readers
   */
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }
}

/**
 * Keyboard navigation utilities
 */
export const keyboardNavigation = {
  /**
   * Handle arrow key navigation for lists
   */
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isVertical = orientation === 'vertical'
    const isHorizontal = orientation === 'horizontal'
    
    switch (event.key) {
      case isVertical ? 'ArrowDown' : 'ArrowRight':
        event.preventDefault()
        return Math.min(currentIndex + 1, items.length - 1)
      case isVertical ? 'ArrowUp' : 'ArrowLeft':
        event.preventDefault()
        return Math.max(currentIndex - 1, 0)
      case 'Home':
        event.preventDefault()
        return 0
      case 'End':
        event.preventDefault()
        return items.length - 1
      default:
        return currentIndex
    }
  },

  /**
   * Handle Enter and Space key activation
   */
  handleActivation: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      callback()
    }
  }
}

/**
 * Color contrast utilities
 */
export const colorContrast = {
  /**
   * Calculate relative luminance
   */
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  },

  /**
   * Calculate contrast ratio between two colors
   */
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
    const lum1 = colorContrast.getLuminance(...color1)
    const lum2 = colorContrast.getLuminance(...color2)
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    return (brightest + 0.05) / (darkest + 0.05)
  },

  /**
   * Check if contrast ratio meets WCAG standards
   */
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const thresholds = {
      AA: 4.5,
      AAA: 7
    }
    return contrastRatio >= thresholds[level]
  }
}

/**
 * Screen reader utilities
 */
export const screenReader = {
  /**
   * Hide element from screen readers
   */
  hide: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true')
  },

  /**
   * Show element to screen readers
   */
  show: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden')
  },

  /**
   * Create screen reader only text
   */
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span')
    element.className = 'sr-only'
    element.textContent = text
    return element
  }
}

/**
 * Motion accessibility utilities
 */
export const motionAccessibility = {
  /**
   * Respect user's motion preferences
   */
  respectsMotionPreference: (): boolean => {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  /**
   * Get reduced motion variants
   */
  getReducedMotionVariants: (variants: any) => {
    if (motionAccessibility.respectsMotionPreference()) {
      return variants
    }
    
    // Return static variants for users who prefer reduced motion
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 }
    }
  }
}
