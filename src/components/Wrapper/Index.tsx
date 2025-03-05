import { AppWrapper, Container } from './styles.ts'
import { ReactNode } from 'react'

interface WrapperProps {
  children?: ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <Container>
      <AppWrapper>{children}</AppWrapper>
    </Container>
  )
}
