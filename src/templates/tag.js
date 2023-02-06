import React from 'react'
import { graphql } from 'gatsby'
// import PageLayout from '../components/PageLayout'

import Seo from "../components/Seo"
import { PostIndexLayout } from '../components/PostIndexLayout'
import { rawMarkdown2LogicalPost } from '../common/utility'
import { PostList } from '../components/PostList'

export default function Index({ data, pageContext }) {
  let tagposts = rawMarkdown2LogicalPost(data.tagposts.nodes);
  let { tag } = pageContext

  return (
      <PostIndexLayout>
        <main className='blogindex'>
          <section className='header flex justify-end'>
            <h1> 标签 | <sub className='text-gray-400'>{tag}({data.tagposts.totalCount})</sub></h1>
          </section>
          <section className='px-2'>
            <PostList data={tagposts} showYears />
          </section>
        </main>
      </PostIndexLayout>
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