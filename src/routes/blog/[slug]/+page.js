export async function load({ params }){
    const post = await import(`../posts/${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default
    console.log(post)
  
    return {
      content,
      title,
      date,
    }
  }