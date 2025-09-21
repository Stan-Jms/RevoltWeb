import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

type AnimatedNumberProps = {
  to: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  formatter?: (value: number) => string
}

export function AnimatedNumber({
  to,
  duration = 1.8,
  className,
  prefix = '',
  suffix = '',
  formatter,
}: AnimatedNumberProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const hasAnimatedRef = useRef(false)
  const inView = useInView(spanRef, { once: true, margin: '-50px' })

  useEffect(() => {
    const node = spanRef.current
    if (!node || hasAnimatedRef.current === true || inView !== true) return

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        const text = formatter
          ? formatter(value)
          : Math.floor(value).toLocaleString('fr-FR')
        node.textContent = `${prefix}${text}${suffix}`
      },
    })

    hasAnimatedRef.current = true
    return () => controls.stop()
  }, [to, duration, formatter, inView, prefix, suffix])

  return (
    <span ref={spanRef} className={className}>
      {`${prefix}${(formatter ? formatter(0) : '0')}${suffix}`}
    </span>
  )
}


