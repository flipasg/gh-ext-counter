import { Box, Container, LinearProgress, Typography } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import useItems from '../hooks/useItems'
import useQueryParameters from '../hooks/useQueryParameters'
import { RepositoryParams } from '../types'
import ErrorMessage from './ErrorMessage'
import NoResults from './NoResults'
import Results from './results/Results'
import SearchForm from './SearchForm'

export default function ExtensionCounter() {
  const { owner, repository } = useQueryParameters()
  const { items, findItems, isLoading, error } = useItems()
  const methods = useForm<RepositoryParams>({
    mode: 'onChange',
    defaultValues: { owner, repository },
  })

  const onSubmit = useCallback(
    (data: RepositoryParams) => findItems(data),
    [findItems],
  )

  useEffect(() => {
    if (owner && repository) {
      findItems({ owner, repository })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...methods}>
      <Container maxWidth='md'>
        {isLoading && <LinearProgress />}
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' component='h1'>
            GitHub Extension Counter
          </Typography>
          <SearchForm onSubmit={onSubmit} />
          {items.length ? <Results items={items} /> : <NoResults />}
          {!!error && <ErrorMessage />}
        </Box>
      </Container>
    </FormProvider>
  )
}
