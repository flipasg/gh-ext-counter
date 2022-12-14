import axios from 'axios'
import {
  GithubRepository,
  GithubTree,
  Repository,
  RepositoryParams,
  Tree,
  TreeParams,
} from '../types'

const client = axios.create({
  baseURL: `https://api.github.com/repos/`,
})

const serializeRepository = (repository: GithubRepository): Repository => ({
  defaultBranch: repository.default_branch,
  treesUrl: repository.trees_url.replace(
    '{/sha}',
    '/' + repository.default_branch,
  ),
})

const serializeTree = (tree: GithubTree): Tree => tree.tree

const findRepository = async ({ owner, repository }: RepositoryParams) => {
  try {
    return serializeRepository(
      (await client.get(`${owner}/${repository}`)).data,
    )
  } catch (error: any) {
    throw new Error(error.message)
  }
}

const findTree = async ({ url }: TreeParams) => {
  try {
    return serializeTree((await client.get(url)).data)
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export { findRepository, findTree }
