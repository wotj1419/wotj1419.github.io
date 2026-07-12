import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('portfolio interactions', () => {
  afterEach(cleanup)

  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 420 })
    window.scrollTo = vi.fn()
  })

  it('renders the original centered hero introduction', () => {
    render(<App />)

    expect(screen.getByText('안녕하세요. 저는', { exact: false })).toBeVisible()
    expect(screen.getByRole('heading', { name: '박재서입니다.' })).toBeVisible()
  })

  it('renders the ITDA award below its project subtitle', () => {
    render(<App />)

    expect(screen.getByText('노드 기반 AI 영상 제작 플랫폼')).toBeVisible()
    expect(screen.getByText('수상 내역 · SSAFY 공통 프로젝트 최우수상')).toBeVisible()
    expect(screen.queryByText('노드 기반 AI 영상 제작 플랫폼 · SSAFY 공통 프로젝트 최우수상')).not.toBeInTheDocument()
  })

  it('dims non-matching technologies instead of removing them', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('tab', { name: 'Frontend' }))

    expect(screen.getByAltText('React')).toBeVisible()
    expect(screen.getByAltText('Python')).toHaveStyle({ opacity: '0.15' })
  })

  it('opens the original project overlay and restores the previous scroll position when closed', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[0])
    expect(screen.getByRole('dialog', { name: /Anvi 프로젝트 상세/i })).toBeVisible()
    expect(screen.getByText('스크롤을 내리면 프로젝트 정보를 볼 수 있습니다.')).toBeVisible()
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 })

    fireEvent.click(screen.getByRole('button', { name: '프로젝트 상세 닫기' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 420 })
  })

  it('renders the documented ANVI API and real-time reliability outcomes', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[0])

    expect(screen.getByText(/QR\/PIN 기반 시험 입장/)).toBeVisible()
    expect(screen.getByText(/38개 API wrapper/)).toBeVisible()
    expect(screen.getByText(/2.5초 후 재연결/)).toBeVisible()
    expect(screen.getByAltText('Vite')).toHaveAttribute('src', expect.stringContaining('vitejs/vitejs-original.svg'))
  })

  it('renders the documented Almaengi notification and API outcomes', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[1])

    expect(screen.getByText(/동시 10회 token sync/)).toBeVisible()
    expect(screen.getByText(/messageId 기준 deduplication/)).toBeVisible()
    expect(screen.getByText(/14개 module/)).toBeVisible()
  })

  it('renders the documented ITDA performance measurements', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[2])

    expect(screen.getByText(/8.48MiB에서 0.70MiB/)).toBeVisible()
    expect(screen.getByText(/91.8%/)).toBeVisible()
    expect(screen.getByText(/318,604 bytes에서 122,444 bytes/)).toBeVisible()
    expect(screen.getByText('노드 에디터 UI/UX')).toBeVisible()
    expect(screen.getByText('타임라인·프리뷰 연동')).toBeVisible()
    expect(screen.getByText('실시간 협업 UI')).toBeVisible()
    expect(screen.getByText('랜딩 페이지 성능 최적화')).toBeVisible()
  })

  it('omits library icons without suitable visual assets', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[1])
    expect(screen.queryByAltText('React Query')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '프로젝트 상세 닫기' }))

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[2])
    expect(screen.queryByAltText('Vue Flow')).not.toBeInTheDocument()
  })
})
