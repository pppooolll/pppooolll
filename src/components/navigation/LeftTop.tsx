import * as React from 'react'
import { Link } from 'react-router-dom'
import pkg from '../../../package.json'

const LeftTop = () => {

  return (
    <div>
      <Link to='/' className='font-bold text-gray-600 hover:text-gray-700 no-underline'>{pkg.name}</Link>
    </div>
  )
}

export default LeftTop