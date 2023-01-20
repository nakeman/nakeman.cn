const path = require('path')

const rawMarkdown2LogicalPost = (MDArray,option = {}) =>{
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


const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const tagindex = path.resolve('./src/templates/tag.js')
  const categoryindex = path.resolve('./src/templates/category.js')

  const result = await graphql(
    `
      {

            allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
              nodes {
                id
                frontmatter {
                  categories
                  date
                  slug
                  title
                  tags
                }
              }
            }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = rawMarkdown2LogicalPost(result.data.allMarkdownRemark.nodes)
  //const posts = all;//.filter((post) => post.node.frontmatter.template === 'post')
  const tagSet = new Set()
  const categorySet = new Set()

  // =====================================================================================
  // Posts' tags and cates
  // =====================================================================================

  posts.forEach((post, i) => {

    if (post.tags) {
      post.tags.forEach((tag) => {
        tagSet.add(tag)
      })
    }

    if (post.categories) {
      post.categories.forEach((category) => {
        categorySet.add(category)
      })
    }
  })

  // =====================================================================================
  // Tags
  // =====================================================================================

  const tagList = Array.from(tagSet)
  tagList.forEach((tag) => {
    createPage({
      path: `/tags/${tag}/`,
      component: tagindex,
      context: {
        tag,
      },
    })
  })

  // =====================================================================================
  // Categories
  // =====================================================================================

  const categoryList = Array.from(categorySet)
  categoryList.forEach((category) => {
    createPage({
      path: `/categories/${category}/`,
      component: categoryindex,
      context: {
        category,
      },
    })
  })
}

exports.createPages = createPages
