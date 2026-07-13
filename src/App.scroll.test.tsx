import { render } from '@testing-library/react'
import { expect, it, vi } from 'vitest'

const useLayoutEffectSpy = vi.hoisted(() => vi.fn())

vi.mock('react', async () => {
  const react = await vi.importActual<typeof import('react')>('react')

  return { ...react, useLayoutEffect: useLayoutEffectSpy }
})

import App from './App'

it('uses a layout effect to restore project-page scroll before paint', () => {
  render(<App />)

  expect(useLayoutEffectSpy).toHaveBeenCalled()
})
