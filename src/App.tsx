import { useLayoutEffect, useMemo, useRef, useState } from 'react'
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
  const modalTriggerRef = useRef<HTMLButtonElement | null>(null)
  const selectedProject = useMemo(() => projects.find((project) => project.id === selectedProjectId), [selectedProjectId])

  useLayoutEffect(() => {
    window.scrollTo({ top: selectedProject ? 0 : savedScrollPosition, behavior: 'instant' })
  }, [savedScrollPosition, selectedProject])

  const selectProject = (projectId: string, trigger: HTMLButtonElement) => {
    modalTriggerRef.current = trigger
    setSavedScrollPosition(window.scrollY)
    setSelectedProjectId(projectId)
  }

  const closeProject = () => {
    const trigger = modalTriggerRef.current
    const projectIndex = projects.findIndex((project) => project.id === selectedProjectId)
    setSelectedProjectId(null)

    if (!trigger || projectIndex < 0) return

    window.requestAnimationFrame(() => {
      const selector = trigger.classList.contains('project-image-button')
        ? '.project-image-button'
        : '.detail-button'
      document.querySelectorAll<HTMLButtonElement>(selector)[projectIndex]?.focus()
    })
  }

  return <><Header onHome={closeProject} />{selectedProject ? <ProjectDetail project={selectedProject} onClose={closeProject} /> : <main id="home"><Hero /><Experience /><TechStack /><Projects onSelect={selectProject} /><Awards /><Contact /></main>}</>
}
