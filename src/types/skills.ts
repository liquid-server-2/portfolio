export type SkillCategory = 'frontend' | 'backend' | 'database' | 'ingestion' | 'tools'

export interface VerifiedProjectUsage {
  projectId: string
  projectName: string
  roleTitle: string
  concreteUses: string[]
}

export interface SkillDetail {
  id: string
  name: string
  category: SkillCategory
  tagline: string
  description: string
  verifiedProjects: VerifiedProjectUsage[]
  relatedConcepts: string[]
  highlight?: boolean
}

export interface SkillCategoryGroup {
  id: SkillCategory
  title: string
  subtitle: string
  description: string
  skillIds: string[]
}
