import * as React from 'react'
import { Route } from 'react-router-dom'
import routes from '@api/routes.json'

const RouteList:React.FC = ({children}) => {
  
  return (
    <>
      {children}
      {
        routes.map((x, index)=> {
          console.log(x.url)
          return (
            <Route 
              exact
              key={index}
              path={`/${x.url}`}
              component={React.lazy(()=> import(`../layouts/${x.type}/Detail.tsx`))}
            />
          )
        })
      }
    </>
  )
}

export default RouteList