import {
  Flag,
  DetailsSummaryContainer,
  DetailsSummaryInfo,
  DetailsSummaryInfoFooter,
  DetailsSummaryInfoHeader,
  DetailsSummaryInfoMain,
} from './styles.ts'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaChevronLeft } from 'react-icons/fa6'
import { FaCalendarDay, FaComment } from 'react-icons/fa'

import { useContextSelector } from 'use-context-selector'
import { GitHubAccountContext } from '../../../contexts/GitHubAccountContext.tsx'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function DetailsSummary() {
  const { chooseGitHubIssue } = useContextSelector(
    GitHubAccountContext,
    (context) => ({
      chooseGitHubIssue: context.chooseGitHubIssue,
    }),
  )

  return (
    <DetailsSummaryContainer>
      <DetailsSummaryInfo>
        <DetailsSummaryInfoHeader>
          <NavLink to="/">
            <FaChevronLeft />
            VOLTAR
          </NavLink>

          <a
            href={chooseGitHubIssue?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB
            <FiExternalLink />
          </a>
        </DetailsSummaryInfoHeader>

        <DetailsSummaryInfoMain>
          <h2>{chooseGitHubIssue?.title}</h2>
        </DetailsSummaryInfoMain>

        <DetailsSummaryInfoFooter>
          <Flag>
            <FaGithub />
            <span>{chooseGitHubIssue?.user.login}</span>
          </Flag>

          <Flag>
            <FaCalendarDay />
            <span>
              {chooseGitHubIssue?.created_at
                ? formatDistanceToNow(new Date(chooseGitHubIssue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })
                : 'Data não disponível'}
            </span>
          </Flag>

          <Flag>
            <FaComment />
            <span>{chooseGitHubIssue?.comments}</span>
          </Flag>
        </DetailsSummaryInfoFooter>
      </DetailsSummaryInfo>
    </DetailsSummaryContainer>
  )
}
