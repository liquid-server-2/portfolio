import { useCallback, useEffect, useRef, useState } from 'react'
import type { SectionId } from '../types/section'
import type { BurstOrigin, TransitionState } from '../types/transition'

interface TransitionOptions {
  burstDuration?: number
  enterDuration?: number
  exitDuration?: number
}

export function useSectionTransition(options: TransitionOptions = {}) {
  const {
    burstDuration = 480,
    enterDuration = 360,
    exitDuration = 320,
  } = options

  const [transitionState, setTransitionState] = useState<TransitionState>('idle')
  const [activeSectionId, setActiveSectionId] = useState<SectionId | null>(null)
  const [burstOrigin, setBurstOrigin] = useState<BurstOrigin | null>(null)

  const timersRef = useRef<number[]>([])

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t))
    timersRef.current = []
  }, [])

  useEffect(() => {
    return () => {
      clearAllTimers()
    }
  }, [clearAllTimers])

  const selectSection = useCallback(
    (id: SectionId, origin?: BurstOrigin) => {
      if (transitionState !== 'idle') return

      clearAllTimers()
      setActiveSectionId(id)
      setBurstOrigin(origin ?? null)

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        // Fast-path without elaborate burst for accessibility
        setTransitionState('entering')
        const timer = window.setTimeout(() => {
          setTransitionState('active')
        }, 150)
        timersRef.current.push(timer)
        return
      }

      // 1. Burst phase
      setTransitionState('bursting')

      // 2. Transition into section
      const enterTimer = window.setTimeout(() => {
        setTransitionState('entering')

        // 3. Fully active
        const activeTimer = window.setTimeout(() => {
          setTransitionState('active')
        }, enterDuration)

        timersRef.current.push(activeTimer)
      }, burstDuration)

      timersRef.current.push(enterTimer)
    },
    [transitionState, clearAllTimers, burstDuration, enterDuration]
  )

  const returnToHome = useCallback(() => {
    if (transitionState !== 'active') return

    clearAllTimers()
    setTransitionState('exiting')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const duration = prefersReducedMotion ? 120 : exitDuration

    const homeTimer = window.setTimeout(() => {
      setTransitionState('idle')
      setActiveSectionId(null)
      setBurstOrigin(null)
    }, duration)

    timersRef.current.push(homeTimer)
  }, [transitionState, clearAllTimers, exitDuration])

  return {
    transitionState,
    activeSectionId,
    burstOrigin,
    selectSection,
    returnToHome,
  }
}
