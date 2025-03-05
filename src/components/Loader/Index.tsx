import { LoaderContainer } from './styles.ts'
import { CgSpinner } from 'react-icons/cg'

export function Loader() {
  return (
    <LoaderContainer>
      <CgSpinner />
    </LoaderContainer>
  )
}
