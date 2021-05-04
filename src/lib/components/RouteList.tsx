import * as React from 'react'
import { Route } from 'react-router-dom'
import routes from '@api/generatedRoutes.json'

const RouteList:React.FC = ({children}) => {
  
  const generatedDetailRoutes = routes.map((x, index)=> {
    
    const DetailRouteComponent = () => {
      
      const Component = React.lazy(()=> import(`../../layouts/${x.type}/Detail.tsx`))
      
      return <Component {...x} />
    }

    return (
      <Route 
        exact
        key={index}
        path={`/${x.url}`}
        component={DetailRouteComponent}
      />
    )
  })

  const generatedListRoutes = routes.map((x, index)=> {

    const ListRouteComponent = () => {
      
      const Component = React.lazy(()=> import(`../../layouts/${x.type}/List.tsx`))
      
      return <Component {...x} />
    }

    return (
      <Route 
        exact
        key={index}
        path={`/${x.type}/all`}
        component={ListRouteComponent}
      />
    )
  })

  return (
    <>
      {children}
      {generatedDetailRoutes}
      {generatedListRoutes}
    </>
  )
}

export default RouteList