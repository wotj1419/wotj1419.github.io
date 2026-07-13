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

  it('renders the hero bracket image without the terminal', () => {
    render(<App />)

    expect(screen.queryByLabelText('개발자 소개 터미널')).not.toBeInTheDocument()
    expect(screen.getByAltText('메탈릭 그린 3D 브래킷')).toHaveAttribute('src', '/assets/hero-brackets.png')
    expect(screen.getByTestId('hero-visual')).toHaveAttribute('data-layout', 'centered-overlap')
    expect(screen.getByTestId('hero-code-window')).toBeVisible()
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
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'instant' })

    fireEvent.click(screen.getByRole('button', { name: '프로젝트 상세 닫기' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 420, behavior: 'instant' })
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

  it('renders user-flow intros with representative service features', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[0])
    expect(screen.getByText(/비대면 시험에서 응시자는/)).toBeVisible()
    expect(screen.getByText(/QR 또는 PIN으로 시험에 입장/)).toBeVisible()
    expect(screen.queryByText(/저는 응시자 앱/)).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '프로젝트 상세 닫기' }))

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[1])
    expect(screen.getByText(/소규모 사업장을 운영하다 보면/)).toBeVisible()
    expect(screen.getByText(/QR 출퇴근, 전자 근로계약·문서함/)).toBeVisible()
    expect(screen.queryByText(/저는 로그인\/세션 처리/)).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '프로젝트 상세 닫기' }))

    fireEvent.click(screen.getAllByRole('button', { name: '프로젝트 자세히 보기 →' })[2])
    expect(screen.getByText(/AI 영상 제작은/)).toBeVisible()
    expect(screen.getByText(/시나리오를 작성한 뒤 노드 기반 씬 에디터/)).toBeVisible()
    expect(screen.queryByText(/흐름을 설계했습니다/)).not.toBeInTheDocument()
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
