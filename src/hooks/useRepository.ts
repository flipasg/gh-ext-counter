import { useCallback, useEffect, useState } from 'react'
import { findRepository, findTree } from '../api'
import { GithubTreeItem, GithubTreeItemTypes, Repository } from '../types'
import useQueryParameters from './useQueryParameters'

export default function useRepository() {
  const { owner, repository: repositoryName } = useQueryParameters()
  const [repository, setRepository] = useState<Repository | null>(null)
  const [items, setItems] = useState<GithubTreeItem[]>([])

  const findTrees = useCallback((urls: string[]) => {
    Promise.all(urls.map((url) => findTree({ url }))).then((res) => {
      const items = res.flat()
      // const trees = items.filter(
      //   ({ type }) => type === GithubTreeItemTypes.TREE,
      // )
      // if (trees.length > 0) {
      //   findTrees(trees.map(({ url }) => url))
      // }
      setItems((storedItems) => [
        ...storedItems,
        ...items.filter(({ type }) => type !== GithubTreeItemTypes.TREE),
      ])
    })
  }, [])

  useEffect(() => {
    if (owner && repositoryName) {
      findRepository({ owner, repository: repositoryName }).then((repository) =>
        setRepository(repository),
      )
    }
  }, [owner, repositoryName])
  useEffect(() => {
    if (repository) {
      findTrees([repository.treesUrl])
    }
  }, [findTrees, repository])

  return { owner, repository: repositoryName, items }
}
