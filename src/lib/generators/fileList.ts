import fg from 'fast-glob'

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

export default fileList