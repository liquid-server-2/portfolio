import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import './AmbientBackground.css'

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  baseAlpha: number
  alpha: number
  twinkleSpeed: number
  speedX: number
  speedY: number
  phase: number
}

export const AmbientBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2.5)

    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const particleCount = Math.min(Math.floor((width * height) / 22000), 65)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const handleResize = () => {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2.5)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return
      // Normalized between -1 and 1
      mousePos.current.targetX = (e.clientX / width - 0.5) * 2
      mousePos.current.targetY = (e.clientY / height - 0.5) * 2
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      // Smooth mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05

      // Reset transform and clear logical viewport
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!prefersReducedMotion) {
          p.phase += p.twinkleSpeed
          p.alpha = p.baseAlpha + Math.sin(p.phase) * (p.baseAlpha * 0.5)

          p.originX += p.speedX
          p.originY += p.speedY

          // Wrap edges
          if (p.originX < 0) p.originX = width
          if (p.originX > width) p.originX = 0
          if (p.originY < 0) p.originY = height
          if (p.originY > height) p.originY = 0

          // Parallax offset
          p.x = p.originX + mousePos.current.x * (p.size * 8)
          p.y = p.originY + mousePos.current.y * (p.size * 8)
        }

        ctx.fillStyle = `rgba(220, 235, 255, ${Math.max(0, p.alpha)})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="ambient-container" aria-hidden="true">
      <canvas ref={canvasRef} className="ambient-canvas" />
      <div className="ambient-orbs-layer">
        <div className="ambient-orb orb-primary" />
        <div className="ambient-orb orb-secondary" />
        <div className="ambient-orb orb-tertiary" />
      </div>
      <div className="ambient-grid-subtle" />
      <div className="ambient-vignette" />
    </div>
  )
}
