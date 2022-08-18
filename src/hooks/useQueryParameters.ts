import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function useQueryParameters() {
  const { search } = useLocation()
  return useMemo(() => {
    const params = new URLSearchParams(search)
    return {
      owner: params.get('owner'),
      repository: params.get('repository'),
    }
  }, [search])
}
