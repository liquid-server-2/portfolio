import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import { SkillExplorer } from '../components/skills/SkillExplorer'
import './pages.css'

export interface SkillsPageProps {
  section: SectionItem
  onBack: () => void
}

export const SkillsPage: FC<SkillsPageProps> = ({ section, onBack }) => {
  return (
    <SectionPageLayout section={section} onBack={onBack}>
      <SkillExplorer />
    </SectionPageLayout>
  )
}
