import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'


function App(): JSX.Element {
  return (
    <Suspense>
      <Routes>
      <Route path="/" Component={Dashboard} />
      </Routes>
      </Suspense>
  )
}

export default App
