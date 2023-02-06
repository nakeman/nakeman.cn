import React from 'react'
import { graphql } from 'gatsby'
// import PageLayout from '../components/PageLayout'

import Seo from "../components/Seo"
import { PostIndexLayout } from '../components/PostIndexLayout'
import { rawMarkdown2LogicalPost } from '../common/utility'
import { PostList } from '../components/PostList'

export default function Index({ data,pageContext }) {
  let cateposts = rawMarkdown2LogicalPost(data.cateposts.nodes);
  let { category } = pageContext

  return (
      <PostIndexLayout>
        <main className='blogindex'>
          <section className='header flex justify-end'>
            <h1> 分类 | <sub className='text-gray-400'>{category}({data.cateposts.totalCount})</sub></h1>
          </section>
          <section className='px-2'>
            <PostList data={cateposts} showYears />
          </section>
        </main>
      </PostIndexLayout>
  )

}

export const Head = ({pageContext}) => <Seo title={pageContext.category} />
export const cateQuery = graphql`
  query cateQuery( $category: String ) {
    cateposts: allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {categories: {in: [$category]}}}
      ) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          categories
          slug
          tags
          title
        }
      }
      totalCount
    }
  }
`