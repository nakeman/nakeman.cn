import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../components/PageLayout'

import Seo from "../components/Seo"
import { PostIndexLayout } from '../components/PostIndexLayout'
import { rawMarkdown2LogicalPost } from '../common/utility'
import { PostList } from '../components/PostList'

export default function Index({ data }) {
  let tagposts = rawMarkdown2LogicalPost(data.tagposts.nodes);

  return (
    <PageLayout>
      <PostIndexLayout>
        <main className='blogindex'>
          <section className='header flex'>
            <h1> 标签 </h1>
          </section>
          <section className='px-2'>
            <PostList data={tagposts} showYears />
          </section>
        </main>
      </PostIndexLayout>
    </PageLayout>
  )

}

export const Head = () => <Seo title="POST INDEX " />
export const cateQuery = graphql`
  query cateQuery( $tag: String ) {
    tagposts: allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: [$tag]}}}
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