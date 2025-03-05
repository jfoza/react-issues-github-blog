import { SearchFormContainer } from './styles.ts'
import { useContextSelector } from 'use-context-selector'
import { GitHubAccountContext } from '../../../contexts/GitHubAccountContext.tsx'
import { useEffect, useState } from 'react'

export function SearchForm() {
  const fetchGithubIssues = useContextSelector(
    GitHubAccountContext,
    (context) => context.fetchGithubIssues,
  )

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchGithubIssues(searchTerm)
    }
  }, [searchTerm, fetchGithubIssues])

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchFormContainer>
  )
}
