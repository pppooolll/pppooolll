import * as React from 'react'
import { Route } from 'react-router'
import RouteList from '@lib/components/RouteList'
import Home from './Home'

const App = () => {

  return (
    <div className="container mx-auto pt-12">
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteList>
          <Route exact path='/' component={Home}/>
        </RouteList>
      </React.Suspense>
    </div>
  )
}

export default App
