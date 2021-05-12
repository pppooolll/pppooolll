import * as React from 'react'
import { mdxAtom } from '@lib/store'
import { useRecoilValue } from 'recoil'

interface DescriptionProps {
  md: string;
}

const Tags:React.FC<{tags:string[]}> = ({tags}) => {
  return (
    <div>
      <div className='font-semibold text-gray-600 text-sm mb-2'>Tags :</div>
      <div className='space-x-2'>
      {
        tags.map((x,index)=> {
          return <span key={index} className='bg-opacity-40 bg-orange-200 text-xs p-2 rounded-xl'>{x}</span>
        })
      }
      </div>
    </div>
  )
}

const Description:React.FC<DescriptionProps> = ({md}) => {
  const markdown = useRecoilValue(mdxAtom)

  const str = md.replace(/\.(\S*)/g, '$1')

  return (
    <div className='w-23rem xl:w-52rem'>
      {React.createElement(markdown[str].ReactComponent)}
      <Tags tags={markdown[str].attributes.tags}/>
    </div>
  )
}

export default Description