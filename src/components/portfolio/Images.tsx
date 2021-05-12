import * as React from 'react'
import { imageArrayAtom } from '@lib/store'
import { useRecoilValue } from 'recoil'

interface ImagesProps {
  images: string[]
}

const Images:React.FC<ImagesProps> = ({images}) => {
  const image = useRecoilValue(imageArrayAtom)

  if(image) return (
    <div className='space-y-3 my-7'>
    {
      images.map((x,index)=> {
        const str = x.replace(/\.(\S*)/g, '$1')
        return (
          <img 
            key={index}
            src={image[str].default}
            alt='test'
            className='w-xl rounded-lg border-1 border-gray-300'
          />
        )
      })
    }
    </div>
  )

  return null
}

export default Images