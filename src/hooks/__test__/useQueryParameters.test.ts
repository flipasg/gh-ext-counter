import { renderHook } from '@testing-library/react'
import useQueryParameters from '../useQueryParameters'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: '?owner=flipasg&repository=flipasg.github.io',
  }),
}))
describe('useQueryParameters', () => {
  test('should return owner & repository', () => {
    const {
      result: {
        current: { owner, repository },
      },
    } = renderHook(() => useQueryParameters())
    expect(owner).toBe('flipasg')
    expect(repository).toBe('flipasg.github.io')
  })
})
