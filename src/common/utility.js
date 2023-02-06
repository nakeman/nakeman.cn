
export const rawMarkdown2LogicalPost = (MDArray,option = {}) =>{
    let blog_prefix = 'blog/';
    return MDArray.map( md => {
      let post = {};
      post.id = md.id;
      post.title = md.frontmatter.title;
      post.categories = md.frontmatter.categories;
      post.date = md.frontmatter.date;
      post.slug = md.frontmatter.slug;
      post.url = blog_prefix + md.frontmatter.slug;
      post.description = md.excerpt;
      post.heroimage = md.frontmatter.heroimage;
      post.tags = md.frontmatter.tags;
  
      return post;
  
    }
    )
  
  }