import { Grid } from '@mui/material'
import { useMemo } from 'react'
import { GithubTreeItem } from '../../types'
import countFilesByExt from '../../utils/countFilesByExt'
import ResultsCode from './ResultsCode'
import ResultsTable from './ResultsTable'

export default function Results({ items }: { items: GithubTreeItem[] }) {
  const data = useMemo(
    () => countFilesByExt(items.map(({ path }) => path)),
    [items],
  )

  return (
    <Grid container>
      <Grid item xs={4}>
        <ResultsCode data={data} />
      </Grid>
      <Grid item xs={8}>
        <ResultsTable data={data} />
      </Grid>
    </Grid>
  )
}
