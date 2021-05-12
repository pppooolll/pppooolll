import fs from 'fs'
import fg from 'fast-glob'
import { contentSort, fileObjectProps } from './generators/contentSort.js'
import { portfolioSort } from './generators/portfolioSort.js'
import config from './rune.config.js'
import markdownSort, { markdownObjectProps } from './generators/markdownSort.js'

interface routeObjectProps {
  route: fileObjectProps[]
}

interface portfolioObjectProps {
  tags: string[];
  detail: markdownObjectProps[];
}

const index = async () => {
  const dirList = await fg(`${config.content}/**`, {
    onlyDirectories: true,
    deep: 1,
    ignore: [`${config.content}/${config.nav}`]
  })

 
  const routeArray = Promise.all(
    dirList.map(async (x)=> {

      const regex = new RegExp(`${config.content}\/(\\w*)`,'g')
      const isArray:boolean = config.nested.includes(x.replace(regex,'$1'))

      return await contentSort(x, isArray? 2 : 1)
    })
  )

  const portfolioArray = await Promise.all(
    dirList.map(async (x)=> {
      if(x.includes('portfolios')) return await portfolioSort(x, 2)
    })
  )

  const markdownArray = await Promise.all(
    dirList.map(async (x)=> {
      return await markdownSort(x, 2)
    })
  )

  const portfolioTags = [...new Set(
    portfolioArray.flat(1).map((x)=> {
      return x?.tags
    }).filter((x)=> {return x !== undefined}).flat(1)
  )]

  const portfolioObject : portfolioObjectProps = {
    tags : portfolioTags,
    detail: markdownArray.flat(1)
  }

  const routeObject : routeObjectProps = {
    route : (await routeArray).flat(1)
  }
  
  if (!fs.existsSync('./src/api')){
    fs.mkdirSync('./src/api');
  }

  fs.writeFile(`./src/api/generatedPortfolios.json`, JSON.stringify(portfolioObject), (err)=> {
    if(err) {
      console.log('Error writing Portfolios and Props', err)
    } else {
      console.log('Successfully wrote Portfolios and Props')
    }
  })

  fs.writeFile(`./src/api/generatedRoutes.json`, JSON.stringify(routeObject.route.flat(1)), (err)=> {
    if(err) {
      console.log('Error writing Routes and Props', err)
    } else {
      console.log('Successfully wrote Routes and Props')
    }
  })
}

index()

export default index