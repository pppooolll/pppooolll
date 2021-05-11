import * as React from 'react'
import CenterTop from './CenterTop'
import LeftTop from './LeftTop'
import RightTop from './RightTop'
// import styles from '@styles/Navigation.module.css'

const TopBar = () => {
  return (
    <nav id='topNavigation' className='flex flex-wrap justify-between px-3 py-2 border-b border-gray-100 fixed w-full'>
      <LeftTop/>
      <CenterTop/>
      <RightTop/>
    </nav>
  )
}

export default TopBar