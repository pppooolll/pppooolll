import * as React from 'react'
import routes from '@api/generatedRoutes.json'
import Images from '@components/home/Images'
import Masonry from 'react-masonry-css'

interface PortfolioProps {
  images: string[];
  type: string;
  url: string;
  markdown?: string;
}

const Home = () => {
  
  const portfolioList = routes.filter(
    (x)=> {
    return x.type == 'portfolios'
    }
  )

  const Portfolio:React.FC<PortfolioProps> = (props) => {
    return (
      <div>
        <Images {...props} />
      </div>
    )
  }

  return (
    <>
      <div className='text-4xl text-center text-gray-200 my-20 font-semibold'>
        a <span className='text-gray-400 hover:text-orange-600'>studio</span> for <span className='text-gray-300 hover:text-red-700'>research, architecture, and design</span>.
      </div>
      <div className='flex flex-wrap gap-3 justify-center'>
        {
          portfolioList.map((x,index)=> {
            return <Portfolio {...x} key={index}/>
          })
        }
      </div>
    </>
  )
}

export default Home