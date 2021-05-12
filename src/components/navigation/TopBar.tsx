import * as React from 'react'
import { useRecoilValue } from 'recoil'

import CenterTop from './CenterTop'
import LeftTop from './LeftTop'
import RightTop from './RightTop'
import { portfolioAtom } from '@lib/store'

const TopBar = () => {
  const portfolio = useRecoilValue(portfolioAtom)
  
  return (
    <nav id='topNavigation' className={`z-10 flex min-h-16 md:min-h-12 flex-col md:flex-row ${Object.keys(portfolio).length > 0 ? 'bg-cool-gray-100' : 'bg-white'} flex-wrap justify-between md:items-center px-6 md:px-12 py-2 border-b border-gray-100 fixed w-full`}>
      {
        Object.keys(portfolio).length > 0 ? 
        <>
          <span className='font-bold text-gray-600'>{portfolio.name}</span>
          <span className='text-xs'>
            {
              portfolio.tags.map((x,index)=> {
                if(index < portfolio.tags.length - 1) return `${x}, `
                return x
              })
            }
          </span>
        </>
        :
        <>
          <LeftTop/>
          <CenterTop/>
          <RightTop/>
        </>
      }
    </nav>
  )
}

export default TopBar