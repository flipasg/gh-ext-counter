import { render } from '@testing-library/react'
import ResultsCode from '../ResultsCode'

describe('ResultsCode', () => {
  test('should render pre element', () => {
    const { getByTestId } = render(
      <ResultsCode
        data={{
          js: 1,
          ts: 2,
        }}
      />,
    )
    const preElement = getByTestId('resultCode')
    expect(preElement).toBeInTheDocument()
  })
})
