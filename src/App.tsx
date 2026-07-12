import { useEffect, useMemo, useState } from 'react'
import { Awards } from './components/Awards'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectDetail } from './components/ProjectDetail'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { projects } from './data/portfolio'
import './styles.css'

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [savedScrollPosition, setSavedScrollPosition] = useState(0)
  const selectedProject = useMemo(() => projects.find((project) => project.id === selectedProjectId), [selectedProjectId])

  useEffect(() => {
    window.scrollTo({ top: selectedProject ? 0 : savedScrollPosition })
  }, [savedScrollPosition, selectedProject])

  const selectProject = (projectId: string) => {
    setSavedScrollPosition(window.scrollY)
    setSelectedProjectId(projectId)
  }

  const closeProject = () => setSelectedProjectId(null)

  return <><Header onHome={closeProject} />{selectedProject ? <ProjectDetail project={selectedProject} onClose={closeProject} /> : <main id="home"><Hero /><Experience /><TechStack /><Projects onSelect={selectProject} /><Awards /><Contact /></main>}</>
}
