import { render } from '@testing-library/react'
import ResultsTable from '../ResultsTable'

describe('ResultsTable', () => {
  test('should render table element', () => {
    const { getByRole } = render(
      <ResultsTable
        data={{
          js: 1,
          ts: 2,
        }}
      />,
    )
    const table = getByRole('table')
    expect(table).toBeInTheDocument()
  })
  // TODO: Test pagination, sorting, ...
})
