import { Box, Button, Grid, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { RepositoryParams } from '../types'
import SearchIcon from '@mui/icons-material/Search'
import { Container } from '@mui/system'
import { useMemo } from 'react'

export default function SearchForm({
  onSubmit,
}: {
  onSubmit: (data: RepositoryParams) => void
}) {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useFormContext<RepositoryParams>()

  const isFormValid = useMemo(
    () => !!isValid && Object.keys(errors).length === 0,
    [isValid, errors],
  )
  return (
    <Container maxWidth='sm' sx={{ ml: 0 }} style={{ paddingLeft: 0 }}>
      <Box py={3}>
        <form>
          <Grid container justifyContent={'space-around'}>
            <Controller
              name={'owner'}
              control={control}
              rules={{ required: 'The owner is required.' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error?.message}
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  label={'Owner'}
                  inputProps={{ 'data-testid': 'owner' }}
                />
              )}
            />
            <Controller
              name={'repository'}
              control={control}
              rules={{ required: 'The repository is required.' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error?.message}
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  label={'Repository'}
                  inputProps={{ 'data-testid': 'repository' }}
                />
              )}
            />
            <Button
              data-testid='submitButton'
              variant='text'
              startIcon={<SearchIcon />}
              onClick={handleSubmit(onSubmit)}
              disabled={!isFormValid}
            >
              Search
            </Button>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}
