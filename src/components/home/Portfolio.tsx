import * as React from 'react'
import routes from '@api/generatedRoutes.json'
import portfolios from '@api/generatedPortfolios.json'
import PortfolioItem from '@components/home/PortfolioItem'

const Portfolio = () => {
  const [portfolioArray, setPortfolioArray] = React.useState<string[]>([])
  const [selectedTag, setSelectedTag] = React.useState('')
  
  React.useEffect(()=> {
    let ArrayTemp:string[] = []
    
    portfolios.detail.filter(
      (x)=>{
        return selectedTag === '' ? x.tags == x.tags : x.tags?.includes(selectedTag)
      }
    ).map((x)=> {
      ArrayTemp.push(x.markdown)
    })

    setPortfolioArray(ArrayTemp)
  }, [selectedTag])

  const TagList = () => {

    
    return (
      <div className='flex gap-3 justify-center mb-3'>
        {
          portfolios.tags.map((x,index)=> {
            return (
              <button key={index} onClick={()=>{setSelectedTag(x)}} className='border-1 py-1 px-2 text-sm font-semibold text-gray-700 hover:bg-gray-200'>
                {x}
              </button>
            )
          })
        }
      </div>
    )
  }
  
  const portfolioData = routes.filter(
    (x)=> {
      return x.type == 'portfolios' && portfolioArray.includes(x.markdown as string)
    }
  )

  return (
    <div className='flex flex-col items-center'>
      <TagList/>
      
      <div className='flex flex-wrap gap-3 justify-center'>
        {
          portfolioData.map((x,index)=> {
            
            return <PortfolioItem {...x} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Portfolio