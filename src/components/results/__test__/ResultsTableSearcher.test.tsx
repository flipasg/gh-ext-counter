import { render } from '@testing-library/react'
import ResultsTableSearcher from '../ResultsTableSearcher'

describe('ResultsTableSearcher', () => {
  test('should render input', () => {
    const { getByTestId } = render(
      <ResultsTableSearcher onChange={jest.fn()} />,
    )
    const submitButton = getByTestId('searcher')
    expect(submitButton).toBeInTheDocument()
  })
})
