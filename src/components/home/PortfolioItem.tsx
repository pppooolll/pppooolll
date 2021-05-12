import * as React from 'react'
import { imageArrayAtom, mdxAtom, portfolioAtom } from '@lib/store'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'

interface ImagesProps {
  images: string[];
  type: string;
  url: string;
  markdown?: string;
}

const PortfolioItem:React.FC<ImagesProps> = ({images, url, markdown}) => {
  const image = useRecoilValue(imageArrayAtom)
  const md = useRecoilValue(mdxAtom)
  const portfolio = useSetRecoilState(portfolioAtom)

  const strImg = images[0].replace(/\.(\S*)/g, '$1')
  const strMd = markdown ? markdown.replace(/\.(\S*)/g, '$1') : '1'

  if(image) {

    const updateAtom = () => portfolio({
      name: md[strMd].attributes.name,
      tags: md[strMd].attributes.tags,
    })

    return (
      <Link onClick={useResetRecoilState(portfolioAtom)} onMouseOver={updateAtom} onMouseLeave={useResetRecoilState(portfolioAtom)} to={url} className='no-underline flex flex-col text-gray-700 hover:text-orange-600'>
        <img src={image[strImg].default} className='image-render-pixel opacity-60 hover:opacity-90 filter-grayscale hover:filter-none rounded-sm w-96 h-72 bg-cover'/>
        <div className='md:hidden py-3 flex flex-col border-b-1'>
          <span className='font-semibold'>{md[strMd].attributes.name}</span>
          <span className='text-sm'>{
              md[strMd].attributes.tags.map((x:string,index:number)=> {
                if(index < md[strMd].attributes.tags.length - 1) return `${x}, `
                return x
              })
            }</span>
        </div>
      </Link>
    )
  }

  return null
}

export default PortfolioItem