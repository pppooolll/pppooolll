import fs from 'fs'
import fg from 'fast-glob'
import { contentSort, fileObjectProps } from './contentSort.js'
import config from './rune.config.js'

interface routeObjectProps {
  route: fileObjectProps[][]
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

  let routeObject : routeObjectProps = {
    route : await routeArray
  }

  fs.writeFile(`./src/api/routes.json`, JSON.stringify(routeObject.route.flat(1)), (err)=> {
    if(err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
    process.exit()
  })
}

index()

export default index