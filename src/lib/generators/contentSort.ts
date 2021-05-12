import _groupBy from 'lodash.groupby'
import fileSort from './fileSort.js'

interface fileObjectProps {
  images:string[],
  markdown:string,
  type: string,
  url: string,
}

const contentSort = async (src:string, depth:number) => {
  const fileArray = await fileSort(src,depth)

  let fileObjects:fileObjectProps[]= []

  Object.keys(fileArray).map((element) => {
    let fileObject:fileObjectProps = {
      images: [],
      markdown: '',
      type: '',
      url: '',
    }

    fileObject.images = fileArray[element].filter((str)=>{
      return /\.(?:jpg|gif|png)/g.test(str)
    })

    fileObject.type = src.replace(/\.\/contents\/(\w*)/g, '$1')

    fileObject.markdown = fileArray[element].filter((str)=>{
      return /\.(?:md[x]?)/g.test(str)
    })[0]

    fileObject.url = `${src.replace(/\.\/contents\/(\w*)/g, '$1')}/${element.toLowerCase()}`

    fileObjects.push(fileObject)
  });

  return fileObjects
}

export { contentSort }
export type { fileObjectProps }