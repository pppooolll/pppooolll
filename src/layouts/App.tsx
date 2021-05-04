import * as React from 'react'
import { Link } from 'react-router-dom'

import RouteList from '@lib/components/RouteList'

function App() {

  return (
    <div className="App">
      <Link to='portfolios/buildinga'>A</Link>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteList/>
      </React.Suspense>
    </div>
  )
}

export default App
