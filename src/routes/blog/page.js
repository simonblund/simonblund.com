export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    console.log(allPostFiles)
    console.log("hue")
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        
        const postPath = path.slice(11, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }

  await fetchMarkdownPosts()
  
  