import { render } from '@testing-library/react'
import ErrorMessage from '../ErrorMessage'

describe('ErrorMessage', () => {
  test('should render title => Error', () => {
    const { getByText } = render(<ErrorMessage />)
    const title = getByText('Error')
    expect(title).toBeInTheDocument()
  })
})
