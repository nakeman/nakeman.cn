import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../components/PageLayout'

import Seo from "../components/Seo"
import { PostIndexLayout } from '../components/PostIndexLayout'
import { rawMarkdown2LogicalPost } from '../common/utility'
import { PostList } from '../components/PostList'

export default function Index({ data }) {
  let cateposts = rawMarkdown2LogicalPost(data.cateposts.nodes);

  return (
    <PageLayout>
      <PostIndexLayout>
        <main className='blogindex'>
          <section className='header flex'>
            <h1> 分类 </h1>
          </section>
          <section className='px-2'>
            <PostList data={cateposts} showYears />
          </section>
        </main>
      </PostIndexLayout>
    </PageLayout>
  )

}

export const Head = () => <Seo title="POST INDEX " />
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