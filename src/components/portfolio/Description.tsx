import * as React from 'react'
import { mdxAtom } from '@lib/store'
import { useRecoilValue } from 'recoil'

interface DescriptionProps {
  md: string;
}

interface AttributesProps {
  name:string;
  tags:string[];
}

const Attributes:React.FC<AttributesProps> = ({name,tags}) => {
  return (
    <>
    <div>
      <span>name :</span>{name}
    </div>
    <div>
      <span>tags :</span>
      {
        tags.map((x,index)=> {
          return <span key={index}>{x}</span>
        })
      }
    </div>
    </>
  )
}

const Description:React.FC<DescriptionProps> = ({md}) => {
  const markdown = useRecoilValue(mdxAtom)

  const str = md.replace(/\.(\S*)/g, '$1')

  return (
    <div className='w-lg'>
      {React.createElement(markdown[str].ReactComponent)}
      <Attributes {...markdown[str].attributes}/>
    </div>
  )
}

export default Description