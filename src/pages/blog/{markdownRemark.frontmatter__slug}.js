import * as React from "react"
import { graphql,Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PageLayout from "../../components/PageLayout"
import Seo from "../../components/Seo"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  const post = rawMarkdown2LogicalPost(markdownRemark);

  return (
    <PageLayout>
      <div className="blogpost container flex flex-col md:flex-row gap-4 mx-auto px-4">
        <aside className="postmeta mt-1 md:mt-10 basis-3/12 ">
          <div> <GatsbyImage className="mx-auto my-3" image={post.heroimage?.childImageSharp.gatsbyImageData} /> </div>
          <div className="post-sidebar-card card flex md:block rounded bg-gray-100 p-4 m-1">
            <h2 className="">Post Meta</h2>
            <ul className="">
              <li>发表于 {post.date}</li>
            </ul>

            {post.categories && (
              <div>
                <h2>Category</h2>
                <ul>
                  <li>
                    <Link to={`/categories/${post.categories}`}>
                      {post.categories}
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            <h2>Tags</h2>
            <div className="tags">
              {post.tags.map(tag => {
                return (
                  <Link
                    key={tag}
                    to={`/tags/${tag}`}
                    className="tag"
                    activeClassName="active"
                  >
                    {tag}
                  </Link>
                )
              })}
            </div>
          </div>
        </aside>
        <main className="post flex-auto mt-10 prose lg:prose-xl">
          <div className="">
            <h1>{post.title}</h1>
            <div className="" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </main>
      </div>
    </PageLayout>
  )
}
export const Head = () => <Seo title="INDEX" />
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        categories
        tags
        featured
        heroimage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 120, height: 120)
          }
        }
      }
    }
  }
`

function rawMarkdown2LogicalPost(md,option = {}){
  let blog_prefix = 'blog/';
  // return MDArray.map( md => {
    let post = {};
    post.id = md.id;
    post.html = md.html;
    post.title = md.frontmatter.title;
    post.categories = md.frontmatter.categories;
    post.date = md.frontmatter.date;
    post.slug = md.frontmatter.slug;
    post.url = blog_prefix + md.frontmatter.slug;
    post.description = md.excerpt;
    post.heroimage = md.frontmatter.heroimage;
    post.tags = md.frontmatter.tags;

    return post;

  //  }
  // )

}