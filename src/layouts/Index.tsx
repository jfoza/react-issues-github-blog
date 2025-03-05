import { LayoutContainer } from './styles.ts'
import { Header } from '../components/Header/Index.tsx'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
