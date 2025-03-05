import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/Index.tsx'
import { Details } from './pages/Details/Index.tsx'
import { Blog } from './pages/Blog/Index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  )
}
