import { Wrapper } from '../../components/Wrapper/Index.tsx'
import { DetailsSummary } from './DetailsSummary/Index.tsx'
import ReactMarkdown from 'react-markdown'
import { MarkdownContainer } from './styles.ts'
import { useContextSelector } from 'use-context-selector'
import { GitHubAccountContext } from '../../contexts/GitHubAccountContext.tsx'

export function Details() {
  const { chooseGitHubIssue } = useContextSelector(
    GitHubAccountContext,
    (context) => ({
      chooseGitHubIssue: context.chooseGitHubIssue,
    }),
  )

  return (
    <Wrapper>
      <DetailsSummary />

      <MarkdownContainer>
        <ReactMarkdown>{chooseGitHubIssue?.body}</ReactMarkdown>
      </MarkdownContainer>
    </Wrapper>
  )
}
