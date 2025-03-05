import { Posts, Card, LoadingOrEmpty, Empty } from './styles.ts'
import { BlogSummary } from './BlogSummary/Index.tsx'
import { SearchForm } from './SearchForm/Index.tsx'
import { Wrapper } from '../../components/Wrapper/Index.tsx'
import { useContextSelector } from 'use-context-selector'
import { GitHubAccountContext } from '../../contexts/GitHubAccountContext.tsx'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Loader } from '../../components/Loader/Index.tsx'
import { useNavigate } from 'react-router-dom'

export function Blog() {
  const navigate = useNavigate()

  const { loading, gitHubIssues, fetchUniqueIssue } = useContextSelector(
    GitHubAccountContext,
    (context) => ({
      loading: context.issuesDataLoading,
      gitHubIssues: context.gitHubIssues,
      fetchUniqueIssue: context.fetchUniqueIssue,
    }),
  )

  function handleFetchUniqueIssue(issueId: number) {
    fetchUniqueIssue(issueId)
    navigate('/details')
  }

  if (loading) {
    return (
      <Wrapper>
        <BlogSummary />
        <SearchForm />

        <LoadingOrEmpty>
          <Loader />
        </LoadingOrEmpty>
      </Wrapper>
    )
  }

  if (gitHubIssues.length === 0) {
    return (
      <LoadingOrEmpty>
        <Empty>Nenhum registro encontrado.</Empty>
      </LoadingOrEmpty>
    )
  }

  return (
    <Wrapper>
      <BlogSummary />
      <SearchForm />

      <Posts>
        {gitHubIssues.map((issue) => (
          <Card
            key={issue.id}
            onClick={() => handleFetchUniqueIssue(issue.number)}
          >
            <div>
              <h2>{issue.title}</h2>

              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>

            <p>{issue.body}</p>
          </Card>
        ))}
      </Posts>
    </Wrapper>
  )
}
