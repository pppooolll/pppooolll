import fileSort from './fileSort.js'
import fs from 'fs'
import fm from 'yaml-front-matter'

interface markdownObjectProps {
  markdown:string;
  tags: string[];
}

const markdownSort = async (src:string, depth:number) => {
  const fileArray = await fileSort(src,depth)

  let markdownObjects:markdownObjectProps[]= []

  Object.keys(fileArray).map((element) => {
    let markdownObject:markdownObjectProps = {
      markdown: '',
      tags: []
    }
    
    markdownObject.markdown = fileArray[element].filter((str)=>{
      return /\.(?:md[x]?)/g.test(str)
    })[0]

    markdownObject.tags = fm.loadFront(fs.readFileSync(markdownObject.markdown)).tags

    markdownObjects.push(markdownObject)
  })
  return markdownObjects
}

export default markdownSort
export type { markdownObjectProps }