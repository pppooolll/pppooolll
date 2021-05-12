import _groupBy from 'lodash.groupby'
import fileList from './fileList.js'

const fileSort = async (src:string, depth:number = 1) => {
  const fileArray = await fileList(src,depth)
  const regex = new RegExp(`${src}\/((\\w.*)\/|(\\w*))\\S*\.\\w*`,'g')

  const items = await _groupBy(fileArray, (str)=> {
    return depth > 1 ? str.replace(regex,'$2') : str.replace(regex,'$3')
  })

  return items
}

export default fileSort