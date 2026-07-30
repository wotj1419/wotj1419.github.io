import { describe, expect, it } from 'vitest'
import { localTechnologyIconPaths, projectTechIconPaths } from './assets'
import { technologies } from './portfolio'

describe('local asset paths', () => {
  it('uses local files for every technology icon', () => {
    expect(technologies).not.toHaveLength(0)
    expect(technologies.every((technology) => technology.icon.startsWith('/assets/icons/'))).toBe(true)
  })

  it('provides local icons for each project technology', () => {
    expect(projectTechIconPaths.Vite).toBe('/assets/icons/vite.svg')
    expect(projectTechIconPaths.Zustand).toBe('/assets/icons/zustand.ico')
    expect(projectTechIconPaths.Pinia).toBe('/assets/icons/pinia.svg')
    expect(localTechnologyIconPaths.Notion).toBe('/assets/icons/notion.svg')
  })
})
