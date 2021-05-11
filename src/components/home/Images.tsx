import * as React from 'react'
import { imageArrayAtom, mdxAtom } from '@lib/store'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

interface ImagesProps {
  images: string[];
  type: string;
  url: string;
  markdown?: string;
}

const Images:React.FC<ImagesProps> = ({images, url, markdown}) => {
  const image = useRecoilValue(imageArrayAtom)
  const md = useRecoilValue(mdxAtom)
  const strImg = images[0].replace(/\.(\S*)/g, '$1')
  const strMd = markdown ? markdown.replace(/\.(\S*)/g, '$1') : '1'

  if(image) return (
    <Link to={url} className='no-underline flex-col flex items-center text-gray-700 hover:text-orange-600'>
      <div style={{
        backgroundImage: `url(${image[strImg].default})`
      }} className='filter-grayscale hover:filter-none rounded-lg bg-blend-overlay z-10 opacity-80 w-64 h-64 bg-cover'
      >
      </div>
      <span className='font-semibold'>{md[strMd].attributes.name}</span>
    </Link>
  )

  return null
}

export default Images