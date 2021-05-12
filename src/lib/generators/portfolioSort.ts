import _groupBy from 'lodash.groupby'
import fs from 'fs'
import fm from 'yaml-front-matter'
import markdownSort from './markdownSort.js'

const portfolioSort = async (src:string, depth:number) => {
  const markdownArray = await markdownSort(src,depth)

  const markdownList = await Promise.all(
    markdownArray.map((x)=> {
      return fs.promises.readFile(x.markdown)
    })
  )

  const frontMatter = await Promise.all(
    markdownList.map(async (x)=> {
      return fm.loadFront(x)
    })
  )

  return frontMatter
}

export { portfolioSort }