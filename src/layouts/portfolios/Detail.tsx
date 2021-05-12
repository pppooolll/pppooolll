import * as React from 'react'
import { fileObjectProps } from '@lib/generators/contentSort'
import Images from '@components/portfolio/Images'
import Description from '@components/portfolio/Description'

const Detail:React.FC<fileObjectProps> = (props) => {
  return (
    <div className='justify-between flex flex-wrap px-6'>
      <Description md={props.markdown}/>
      <Images images={props.images}/>
    </div>
  )
}

export default Detail