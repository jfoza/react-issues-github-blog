import {
  Flag,
  BlogSummaryContainer,
  BlogSummaryInfo,
  BlogSummaryInfoFooter,
  BlogSummaryInfoHeader,
  BlogSummaryInfoMain,
} from './styles.ts'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa6'
import { GoOrganization } from 'react-icons/go'
import { HiUsers } from 'react-icons/hi2'
import { useContextSelector } from 'use-context-selector'
import { GitHubAccountContext } from '../../../contexts/GitHubAccountContext.tsx'
import { Loader } from '../../../components/Loader/Index.tsx'

export function BlogSummary() {
  const { loading, gitHubUser } = useContextSelector(
    GitHubAccountContext,
    (context) => ({
      loading: context.userDataLoading,
      gitHubUser: context.gitHubUser,
    }),
  )

  if (loading) {
    return (
      <BlogSummaryContainer>
        <Loader />
      </BlogSummaryContainer>
    )
  }

  return (
    <BlogSummaryContainer>
      <img src={gitHubUser?.avatar_url} alt="" />

      <BlogSummaryInfo>
        <div>
          <BlogSummaryInfoHeader>
            <h1>{gitHubUser?.name}</h1>

            <a href={gitHubUser?.html_url} target="_blank" rel="noreferrer">
              GITHUB
              <FiExternalLink />
            </a>
          </BlogSummaryInfoHeader>

          <BlogSummaryInfoMain>
            <p>{gitHubUser?.bio}</p>
          </BlogSummaryInfoMain>
        </div>

        <BlogSummaryInfoFooter>
          <Flag>
            <FaGithub />
            <span>{gitHubUser?.login}</span>
          </Flag>

          <Flag>
            <GoOrganization />
            <span>{gitHubUser?.company}</span>
          </Flag>

          <Flag>
            <HiUsers />
            <span>{gitHubUser?.followers}</span>
          </Flag>
        </BlogSummaryInfoFooter>
      </BlogSummaryInfo>
    </BlogSummaryContainer>
  )
}
