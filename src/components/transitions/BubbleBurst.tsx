import { useEffect, useRef } from 'react'
import type { CSSProperties, FC } from 'react'
import type { SectionItem } from '../../types/section'
import type { BurstOrigin } from '../../types/transition'
import './BubbleBurst.css'

export interface BubbleBurstProps {
  section: SectionItem
  origin: BurstOrigin | null
  onComplete?: () => void
}

interface BurstParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  rotation: number
  vRot: number
  isShard: boolean
  length: number
}

export const BubbleBurst: FC<BubbleBurstProps> = ({ section, origin, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)

    const isMobile = width < 768
    const particleCount = isMobile ? 24 : 42

    // Resolve burst origin center
    const centerX = origin?.clientX ?? (origin ? (origin.x / 100) * width : width / 2)
    const centerY = origin?.clientY ?? (origin ? (origin.y / 100) * height : height / 2)

    const colors = [
      section.accentColor.primary,
      section.accentColor.highlight,
      '#ffffff',
      '#f8fafc',
      section.accentColor.glow,
    ]

    const particles: BurstParticle[] = []

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5
      const speed = (Math.random() * 5.5 + 3.0) * (isMobile ? 0.75 : 1)
      const color = colors[Math.floor(Math.random() * colors.length)]

      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 1.5,
        color,
        alpha: 1,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        isShard: Math.random() > 0.4,
        length: Math.random() * 6 + 4,
      })
    }

    let animationFrameId: number
    const startTime = performance.now()
    const burstDuration = 480

    const render = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / burstDuration, 1)

      ctx.clearRect(0, 0, width, height)

      // Easing out fade
      const globalAlpha = 1 - progress

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.94 // Air friction
        p.vy *= 0.94
        p.rotation += p.vRot
        p.alpha = globalAlpha

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.fillStyle = p.color
        ctx.shadowColor = section.accentColor.highlight
        ctx.shadowBlur = 8

        if (p.isShard) {
          ctx.beginPath()
          ctx.moveTo(-p.length / 2, -p.size / 2)
          ctx.lineTo(p.length / 2, 0)
          ctx.lineTo(-p.length / 2, p.size / 2)
          ctx.closePath()
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(render)
      } else {
        if (onComplete) {
          onComplete()
        }
      }
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [section, origin, onComplete])

  const originX = origin?.clientX ?? (origin ? `${origin.x}%` : '50%')
  const originY = origin?.clientY ?? (origin ? `${origin.y}%` : '50%')

  const shockwaveStyles: CSSProperties = {
    left: typeof originX === 'number' ? `${originX}px` : originX,
    top: typeof originY === 'number' ? `${originY}px` : originY,
    '--accent-highlight': section.accentColor.highlight,
    '--accent-glow': section.accentColor.glow,
  } as CSSProperties

  return (
    <div className="bubble-burst-overlay" aria-hidden="true">
      <canvas ref={canvasRef} className="burst-canvas" />
      <div className="burst-flash-core" style={shockwaveStyles} />
      <div className="burst-shockwave-ring" style={shockwaveStyles} />
      <div className="burst-shockwave-ring secondary" style={shockwaveStyles} />
    </div>
  )
}
