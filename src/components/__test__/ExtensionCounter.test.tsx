import ExtensionCounter from '../ExtensionCounter'
import { render } from '@testing-library/react'
import useItems from '../../hooks/useItems'

jest.mock('../../hooks/useQueryParameters', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    owner: 'flipasg',
    repository: 'flipasg.github.io',
  }),
}))
jest.mock('../../hooks/useItems', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    items: [],
    isLoading: false,
    error: null,
    findItems: jest.fn(),
  }),
}))

describe('ExtensionCounter', () => {
  test('should render title => GitHub Extension Counter', () => {
    const { getByText } = render(<ExtensionCounter />)
    const title = getByText('GitHub Extension Counter')
    expect(title).toBeInTheDocument()
  })

  test('should call findItems with owner & repository', () => {
    const useItemsMock = useItems as jest.Mock
    const findItems = jest.fn()
    useItemsMock.mockImplementation(() => ({
      items: [],
      isLoading: false,
      error: null,
      findItems,
    }))
    render(<ExtensionCounter />)
    expect(findItems).toHaveBeenCalledWith({
      owner: 'flipasg',
      repository: 'flipasg.github.io',
    })
  })
})
