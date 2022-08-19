import { InputAdornment, TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/system'

export default function ResultsTableSearcher({
  onChange,
}: {
  onChange: (data: string | undefined) => void
}): JSX.Element {
  return (
    <Box p={1}>
      <TextField
        placeholder={'Search by extension'}
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value.toLowerCase() || undefined)
        }
        inputProps={{ 'data-testid': 'searcher' }}
      />
    </Box>
  )
}
