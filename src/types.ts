export interface RepositoryParams {
  owner: string | null
  repository: string | null
}

export interface TreeParams {
  url: string
}

export interface GithubRepository {
  default_branch: string
  trees_url: string
}

export enum GithubTreeItemTypes {
  BLOB = 'blob',
  TREE = 'tree',
}

export type GithubTreeItemType = GithubTreeItemTypes | `${GithubTreeItemTypes}`

export interface GithubTreeItem {
  path: string
  type: GithubTreeItemType
  url: string
}

export interface GithubTree {
  tree: GithubTreeItem[]
}
export interface Repository {
  defaultBranch: string
  treesUrl: string
}

export type Tree = GithubTreeItem[]
