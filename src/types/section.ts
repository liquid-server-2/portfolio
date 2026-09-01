export type SectionId =
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'education'
  | 'resume'
  | 'contact'

export interface PositionCoordinates {
  /** X position percentage on desktop (0 to 100) */
  x: number
  /** Y position percentage on desktop (0 to 100) */
  y: number
  /** X position percentage on tablet (0 to 100) */
  tabletX?: number
  /** Y position percentage on tablet (0 to 100) */
  tabletY?: number
  /** Order index for mobile staggered flow */
  mobileOrder: number
}

export interface BubbleFloatAnimation {
  /** Animation duration in seconds (e.g. 7.2) */
  duration: number
  /** Animation delay in seconds (e.g. -1.5) */
  delay: number
  /** Max horizontal float amplitude in pixels */
  driftX: number
  /** Max vertical float amplitude in pixels */
  driftY: number
  /** Rotation wobble in degrees */
  wobbleDeg: number
}

export interface SectionItem {
  id: SectionId
  title: string
  subtitle: string
  tag: string
  iconName: 'user' | 'code' | 'cpu' | 'briefcase' | 'graduation-cap' | 'file-text' | 'mail'
  accentColor: {
    hue: number
    primary: string
    glow: string
    border: string
    highlight: string
  }
  coordinates: PositionCoordinates
  float: BubbleFloatAnimation
  sizePx: {
    desktop: number
    tablet: number
    mobile: number
  }
}
