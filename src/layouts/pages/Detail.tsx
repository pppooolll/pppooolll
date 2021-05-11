import * as React from 'react'
import { fileObjectProps } from '@lib/contentSort'
import { useRecoilValue } from 'recoil'
import { mdxAtom } from '@lib/store'

const Detail:React.FC<fileObjectProps> = (props) => {
  const markdown = useRecoilValue(mdxAtom)

  const str = props.markdown.replace(/\.(\S*)/g, '$1')
  return (
    <div className='justify-between flex'>
      {React.createElement(markdown[str].ReactComponent)}
    </div>
  )
}

export default Detail