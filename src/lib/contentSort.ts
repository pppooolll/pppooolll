import fg from 'fast-glob'
import _groupBy from 'lodash.groupby'

interface fileObjectProps {
  images:string[],
  markdown:string,
  type: string,
  url: string,
}

const fileList = async (src:string, depth:number) => {
    const files = await fg([
      `${src}/**`,
    ], 
    {
      dot:true,
      deep: depth
    });
    return files
}

const fileSort = async (src:string, depth:number = 1) => {
  const fileArray = await fileList(src,depth)
  const regex = new RegExp(`${src}\/((\\w.*)\/|(\\w*))\\S*\.\\w*`,'g')

  const items = await _groupBy(fileArray, (str)=> {
    return depth > 1 ? str.replace(regex,'$2') : str.replace(regex,'$3')
  })

  return items
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