import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const  Dashboard =  lazy(() => import("./pages/Dashboard/Dashboard"))


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
