import React from 'react'
import { Link ,graphql,useStaticQuery} from 'gatsby'


/**
 * PostIndexSidebar: 1)posts, 2)categories,3)taged posts index page's common sidebar component
 */
export const PostIndexSidebar = () => {
  // const data = useGetTaxonomies()
  const data = useStaticQuery(
    graphql`
    query TaxonomyQuery {
    tags: allMarkdownRemark {
      group(field: {frontmatter: {tags: SELECT}}) {
        name: fieldValue
        totalCount
      }
    }
    categories: allMarkdownRemark {
      group(field: {frontmatter: {categories: SELECT}}) {
        name: fieldValue
        totalCount
      }
    }
  }
    `
)
  const categories = data.categories.group
  const tags = data.tags.group

  return (
    <aside className="post-index-sidebar w-full">
      <div className="categorylist card ">
        <h2>Categories</h2>
        <div className="categoris flex flex-col">
          {categories
            .filter((category) => category.name !== 'Highlight')
            .map((category) => {
              return (
                <Link
                  key={category.name}
                  to={`/blog/categories/${category.name}`}
                  className="category flex justify-between"
                  activeClassName="active"
                >
                  <div className="name">{category.name}</div>
                  <div className="count">{category.totalCount}</div>
                </Link>
              )
            })}
        </div>
      </div>

      <div className="tagpanel card">
        <h2>Tags</h2>
        <div className="tags flex flex-wrap">
          {tags.map((tag) => {
            return (
              <Link
                key={tag.name}
                to={`/blog/tags/${tag.name}`}
                className="tag"
                activeClassName="active"
              >
                {tag.name}
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
