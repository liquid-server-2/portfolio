import type { SectionId } from './section'

export type TransitionState =
  | 'idle'
  | 'bursting'
  | 'entering'
  | 'active'
  | 'exiting'

export interface BurstOrigin {
  /** Percentage coordinates (0-100) or client pixel coordinates */
  x: number
  y: number
  clientX?: number
  clientY?: number
  size?: number
}

export interface TransitionContextValue {
  state: TransitionState
  activeSectionId: SectionId | null
  burstOrigin: BurstOrigin | null
  selectSection: (id: SectionId, origin?: BurstOrigin) => void
  returnToHome: () => void
}
