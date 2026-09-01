import type { FC } from 'react'
import type { SectionId, SectionItem } from '../../types/section'
import { AboutPage } from '../../pages/AboutPage'
import { ProjectsPage } from '../../pages/ProjectsPage'
import { SkillsPage } from '../../pages/SkillsPage'
import { ExperiencePage } from '../../pages/ExperiencePage'
import { EducationPage } from '../../pages/EducationPage'
import { ResumePage } from '../../pages/ResumePage'
import { ContactPage } from '../../pages/ContactPage'

export interface SectionPageProps {
  section: SectionItem
  onBack: () => void
}

const SECTION_COMPONENTS: Record<SectionId, FC<SectionPageProps>> = {
  about: AboutPage,
  projects: ProjectsPage,
  skills: SkillsPage,
  experience: ExperiencePage,
  education: EducationPage,
  resume: ResumePage,
  contact: ContactPage,
}

export interface SectionRegistryProps {
  section: SectionItem | null
  onBack: () => void
}

export const SectionRegistry: FC<SectionRegistryProps> = ({ section, onBack }) => {
  if (!section) return null

  const PageComponent = SECTION_COMPONENTS[section.id]
  if (!PageComponent) return null

  return <PageComponent section={section} onBack={onBack} />
}
