import * as React from 'react'
import { fileObjectProps } from '@lib/contentSort'
import ImageList from '@lib/components/ImageList'

const Detail:React.FC<fileObjectProps> = (props) => {
  return (
    <div>
      <ImageList title={props.title} images={props.images}/>
      BBBB
    </div>
  )
}

export default Detail