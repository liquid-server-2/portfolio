export interface ProjectItem {
  id: string
  title: string
  tagline: string
  description: string
  highlights: string[]
  tags: string[]
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  status: string
}
