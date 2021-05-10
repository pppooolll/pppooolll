import * as React from 'react'
import { fileObjectProps } from '@lib/contentSort'
import Images from '@components/portfolio/Images'
import Description from '@components/portfolio/Description'

const Detail:React.FC<fileObjectProps> = (props) => {
  return (
    <div className='justify-between flex'>
      <Description md={props.markdown}/>
      <Images images={props.images}/>
    </div>
  )
}

export default Detail