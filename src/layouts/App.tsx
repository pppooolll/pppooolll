import * as React from 'react'

import RouteList from '@lib/components/RouteList'

const App = () => {

  return (
    <div className="container mx-auto pt-12">
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteList/>
      </React.Suspense>
    </div>
  )
}

export default App
