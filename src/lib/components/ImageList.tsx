import * as React from 'react'

interface imageListProps {
  images:string[]
}

const ImageList:React.FC<imageListProps> = ({images}) => {

  if(images.length > 0) {
    return (
        <div>
        {
          images.map((x)=>{
            return <img src={`../../${x}`} />
          })
        }
        </div>
    )
  }

  return null
}

export default ImageList