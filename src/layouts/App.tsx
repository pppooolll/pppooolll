import * as React from 'react'
import '@styles/App.css'
import RouteList from '@components/RouteList'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import List from './portfolios/List'

function App() {

  return (
    <div className="App">
      <BrowserRouter basename='/'>
      <Link to='portfolios/buildinga'>A</Link>
      {JSON.stringify(RouteList)}
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteList>
        <Route 
          path={'/portfolios/all'}
          component={React.lazy(()=> import(`../layouts/portfolios/List`))}
        />
        </RouteList>
      </React.Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
