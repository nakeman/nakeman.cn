import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../../components/PageLayout'

import Seo from "../../components/Seo"
import { PostIndexLayout } from '../../components/PostIndexLayout'
import { rawMarkdown2LogicalPost } from '../../common/utility'
import { PostList } from '../../components/PostList'

export default function Index({ data }) {

  let allposts = rawMarkdown2LogicalPost(data.allposts.nodes);

  return (
    <PageLayout>
      <PostIndexLayout>
        <main className='blogindex'>
          <section className='header flex justify-end'>
            <h1> 文章 </h1>
          </section>
          <section className='px-2'>
            <PostList data={allposts} showYears />
          </section>
        </main>
      </PostIndexLayout>
    </PageLayout>
  )

}

export const Head = () => <Seo title="POST INDEX " />
export const blogQuery = graphql`
  query AllPostQuery {
    allposts: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
