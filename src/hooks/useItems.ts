import { useCallback, useState } from 'react'
import { findRepository, findTree } from '../api'
import { GithubTreeItem, GithubTreeItemTypes, RepositoryParams } from '../types'

export default function useItems() {
  const [items, setItems] = useState<GithubTreeItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const findTrees = useCallback((urls: string[]) => {
    setIsLoading(true)
    Promise.all(urls.map((url) => findTree({ url })))
      .then((res) => {
        const items = res.flat()
        const trees = items.filter(
          ({ type }) => type === GithubTreeItemTypes.TREE,
        )
        setItems((storedItems) => [
          ...storedItems,
          ...items.filter(({ type }) => type !== GithubTreeItemTypes.TREE),
        ])
        if (trees.length > 0) {
          findTrees(trees.map(({ url }) => url))
        }
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false))
  }, [])

  const findItems = ({ owner, repository }: RepositoryParams) => {
    setIsLoading(true)
    setError(null)
    findRepository({ owner, repository })
      .then((repository) => {
        if (repository) {
          findTrees([repository.treesUrl])
        }
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false))
  }

  return { findItems, items, isLoading, error }
}
