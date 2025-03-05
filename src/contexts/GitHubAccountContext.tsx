import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import axios from 'axios'

export interface GitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: 'User' | 'Organization'
  user_view_type: 'public' | 'private'
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubIssue {
  id: number
  number: number
  html_url: string
  title: string
  created_at: string
  body: string
  comments: number
  user: {
    login: string
  }
}

interface GitHubIssuesResponse {
  items: GitHubIssue[]
}

interface GitHubAccountContextType {
  userDataLoading: boolean
  issuesDataLoading: boolean
  gitHubUser?: GitHubUser | null
  gitHubIssues: GitHubIssue[]
  chooseGitHubIssue?: GitHubIssue | null
  fetchUniqueIssue: (issueId: number) => void
  fetchGithubIssues: (data?: string) => void
}

interface GitHubAccountProviderProps {
  children: ReactNode
}

export const GitHubAccountContext = createContext<GitHubAccountContextType>(
  {} as GitHubAccountContextType,
)

export const GitHubAccountProvider = ({
  children,
}: GitHubAccountProviderProps) => {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser | null | undefined>(
    null,
  )

  const [gitHubIssues, setGitHubIssues] = useState<GitHubIssue[]>([])

  const [chooseGitHubIssue, setChooseGitHubIssue] = useState<
    GitHubIssue | null | undefined
  >(null)

  const [userDataLoading, setUserDataLoading] = useState<boolean>(true)
  const [issuesDataLoading, setIssuesDataLoading] = useState<boolean>(true)

  const fetchGitHubUser = useCallback(async () => {
    setUserDataLoading(true)

    const response = await axios.get<GitHubUser | null | undefined>(
      'https://api.github.com/users/Rocketseat',
    )

    setGitHubUser(response.data)

    setUserDataLoading(false)
  }, [])

  const fetchGithubIssues = useCallback(async (query?: string) => {
    setIssuesDataLoading(true)

    try {
      let response

      if (query && query.trim() !== '') {
        response = await axios.get<GitHubIssuesResponse>(
          `https://api.github.com/search/issues?q=${encodeURIComponent(
            query,
          )}+repo:rocketseat-education/reactjs-github-blog-challenge`,
        )

        setGitHubIssues(response.data.items)
      } else {
        response = await axios.get<GitHubIssue[]>(
          'https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues',
        )

        setGitHubIssues(response.data)
      }
    } catch (error) {
      console.error('Erro ao buscar issues:', error)
      setGitHubIssues([])
    } finally {
      setIssuesDataLoading(false)
    }
  }, [])

  const fetchUniqueIssue = useCallback(async (issueId: number) => {
    setUserDataLoading(true)

    setChooseGitHubIssue(null)

    const response = await axios.get<GitHubIssue | null | undefined>(
      `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueId}`,
    )

    setChooseGitHubIssue(response.data)

    setUserDataLoading(false)
  }, [])

  useEffect(() => {
    fetchGitHubUser()
    fetchGithubIssues()
  }, [fetchGitHubUser, fetchGithubIssues])

  return (
    <GitHubAccountContext.Provider
      value={{
        userDataLoading,
        issuesDataLoading,
        gitHubUser,
        gitHubIssues,
        chooseGitHubIssue,
        fetchUniqueIssue,
        fetchGithubIssues,
      }}
    >
      {children}
    </GitHubAccountContext.Provider>
  )
}
