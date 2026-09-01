import { useRef } from 'react'
import type { CSSProperties, FC } from 'react'
import type { SectionId, SectionItem } from '../../types/section'
import type { BurstOrigin } from '../../types/transition'
import { SectionIcon } from '../icons/SectionIcon'
import './Bubble.css'

export interface BubbleProps {
  section: SectionItem
  onSelect?: (id: SectionId, origin?: BurstOrigin) => void
  isBursting?: boolean
  isOtherBursting?: boolean
}

export const Bubble: FC<BubbleProps> = ({
  section,
  onSelect,
  isBursting = false,
  isOtherBursting = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const {
    id,
    title,
    subtitle,
    tag,
    iconName,
    accentColor,
    coordinates,
    float,
    sizePx,
  } = section

  // Inline CSS Custom Properties for dynamic styling
  const customStyles: CSSProperties = {
    '--accent-primary': accentColor.primary,
    '--accent-glow': accentColor.glow,
    '--accent-glow-subtle': accentColor.glow.replace(')', ', 0.15)').replace('rgba', 'rgba'),
    '--accent-border': accentColor.border,
    '--accent-highlight': accentColor.highlight,
    '--pos-x': `${coordinates.x}%`,
    '--pos-y': `${coordinates.y}%`,
    '--mobile-order': coordinates.mobileOrder,
    '--float-duration': `${float.duration}s`,
    '--float-delay': `${float.delay}s`,
    '--drift-x': `${float.driftX}px`,
    '--drift-y': `${float.driftY}px`,
    '--wobble-deg': `${float.wobbleDeg}deg`,
    '--bubble-size': `${sizePx.desktop}px`,
  } as CSSProperties

  const handleClick = () => {
    if (!onSelect) return

    let origin: BurstOrigin | undefined
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      origin = {
        x: coordinates.x,
        y: coordinates.y,
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        size: rect.width,
      }
    } else {
      origin = {
        x: coordinates.x,
        y: coordinates.y,
      }
    }

    onSelect(id, origin)
  }

  const positionerClasses = [
    'bubble-positioner',
    isBursting ? 'is-bursting' : '',
    isOtherBursting ? 'is-other-bursting' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const cardClasses = [
    'bubble-card',
    isBursting ? 'is-bursting' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={positionerClasses}
      style={customStyles}
      data-section={id}
    >
      <div className="bubble-float-wrapper">
        <button
          ref={buttonRef}
          type="button"
          className={cardClasses}
          onClick={handleClick}
          aria-label={`Explore ${title} section: ${subtitle}`}
          title={`${title} - ${subtitle}`}
        >
          {/* Subtle Ambient Aura */}
          <div className="bubble-ambient-aura" aria-hidden="true" />

          {/* Inner Content */}
          <div className="bubble-inner-content">
            <span className="bubble-tag" aria-hidden="true">
              {tag}
            </span>

            <div className="bubble-icon-wrapper">
              <SectionIcon name={iconName} size={22} />
            </div>

            <h3 className="bubble-title">{title}</h3>
            <span className="bubble-subtitle" aria-hidden="true">
              {subtitle}
            </span>

            {/* Hover Revealed Action Hint */}
            <div className="bubble-open-hint" aria-hidden="true">
              <span>Open</span>
              <span className="bubble-open-arrow">↗</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
