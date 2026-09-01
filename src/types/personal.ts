export interface SocialLink {
  platform: string
  label: string
  url: string
  iconName?: string
  isPlaceholder?: boolean
}

export interface AchievementItem {
  id: string
  metric: string
  title: string
  category: string
  description: string
}

export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  bioParagraphs: string[]
  coreFocus: string[]
  location: string
  email: string
  phone: string
  githubUrl: string
  linkedinUrl: string
  codechefUrl: string
  status: string
  socialLinks: SocialLink[]
  achievements: AchievementItem[]
}
