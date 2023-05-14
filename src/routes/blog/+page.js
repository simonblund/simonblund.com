const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        
        const postPath = path.slice(11, -3).replace('/posts', '')
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts.sort((a,b)=>Date.parse(b.meta.date) - Date.parse(a.meta.date))
  }

export const load = async () => {
    const allPosts = await fetchMarkdownPosts()
  
    return {
      posts: allPosts,
    }
}
  
  