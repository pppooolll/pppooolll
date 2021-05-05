import * as React from 'react'

interface imageListProps {
  images:string[],
  title:string
}
const ImageList:React.FC<imageListProps> = ({images, title}) => {
  const [ imageArray, setImageArray ] = React.useState<any[]>([])
  
  React.useEffect(()=>
  {
    Promise.all(
      images.map((x)=>{
        const str = x.replace(/\.\/(\S*)\.jpg/g,'$1')
        return import (`../../${str}.jpg`)
      })
    ).then(
      (x)=> {setImageArray(x)}
    )
  },[])

  console.log(imageArray)
  return (
    <>
    {
      imageArray.map((x, index)=> {
        return <img key={index} src={x.default} alt={`${title}-picture-${index+1}`}/>
      })
    }
    </>
  )
}



export default ImageList