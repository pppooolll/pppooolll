import * as React from 'react'
import { Link } from 'react-router-dom'
import navigation from '@navigations/topNavigation.json'

const RightTop = () => {
  return(
    <div className='justify-between space-x-3 font-semibold'>
      {
        navigation.map((x,index)=> {
          return <Link key={index} to={x.to} className='text-sm no-underline hover:text-gray-700 text-gray-500'>{x.name}</Link>
        })
      }
    </div>
  )
}

export default RightTop