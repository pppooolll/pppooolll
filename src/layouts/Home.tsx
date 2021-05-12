import * as React from 'react'
import Portfolio from '@components/home/Portfolio'

const Home = () => {

  return (
    <>
      <div className='text-4xl px-7 md:text-center text-gray-300 my-20 font-semibold'>
        a <span className='text-gray-500 hover:text-orange-600'>studio</span> for <span className='text-gray-400 hover:text-red-700'>research, architecture, and design</span>.
      </div>
      <Portfolio />
    </>
  )
}

export default Home