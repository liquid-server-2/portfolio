export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location?: string
  description: string
  highlights?: string[]
  achievements?: string[]
  techStack?: string[]
  isPlaceholder?: boolean
}
