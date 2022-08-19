import { render } from '@testing-library/react'
import NoResults from '../NoResults'

describe('NoResults', () => {
  test('should render title => No results found.', () => {
    const { getByText } = render(<NoResults />)
    const title = getByText('No results found.')
    expect(title).toBeInTheDocument()
  })
})
