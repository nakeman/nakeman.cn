import * as React from "react"
import { graphql,Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import PageLayout from "../../components/PageLayout"
import Seo from "../../components/Seo"
import { useEffect } from "react"
import { useState } from "react"
import Scrollspy from 'react-scrollspy'

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  const post = rawMarkdown2LogicalPost(markdownRemark);
  const [sectionids,setIds] = useState([])
  const [sectionItems,setItems] = useState([])

  // load the TOC 
  useEffect(() =>{
    let hs = document.querySelectorAll('#blogpost h2,#blogpost h3');
    let ids = [];
    let items = [];
    // console.log(scrollspy)
    hs.forEach(h =>{
      ids.push(h.id);
      if(h.tagName =='H3')
        items.push({id:h.id,isSubitem:true})
      else
        items.push({id:h.id,isSubitem:false})
    })  
    setIds(ids)
    setItems(items)    
  },[])


  // load smooth-scroll
  useEffect(() =>{
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]',{easing: 'easeOutQuint'})
    }
  })
  return (
      <div  className="blogpost container flex flex-col md:flex-row gap-4 mx-auto px-4">
        <aside className="postmeta mt-1 md:mt-10 basis-3/12 ">
          <div> <GatsbyImage className="mx-auto my-3" image={post.heroimage?.childImageSharp.gatsbyImageData} /> </div>
          <div className="post-sidebar-card card md:block rounded bg-gray-100 p-4 m-1">
            <h2 className="">Post Meta</h2>
            <ul className="dark:text-white">
              <li>发表于 {post.date}</li>
            </ul>

            {post.categories && (
              <div>
                <h2>Category</h2>
                <ul>
                  {post.categories.map( cat => {
                    return(
                    <li>
                      <Link to={`/blog/categories/${cat}`}>
                        {cat}
                      </Link>
                    </li>
                    )
                  })}
                </ul>
              </div>
            )}

            <h2>Tags</h2>
            <div className="tags">
              {post.tags.map(tag => {
                return (
                  <Link
                    key={tag}
                    to={`/blog/tags/${tag}`}
                    className="tag"
                    activeClassName="active"
                  >
                    {tag}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="toc card sticky top-3 md:block rounded bg-gray-100 p-4 m-1 mt-2">
            <h2 className=" text-center "> -- 目录 -- </h2>
            <Scrollspy items={sectionids} componentTag='section' currentClassName="active">
            { sectionItems.map( item => {
              return <li className={item.isSubitem?'subitem':''}><a href={'#'+item.id}>{item.id}</a></li>
            })
            }
              {/* <div className="tocdiv" dangerouslySetInnerHTML={{ __html: post.toc }} /> */}
            </Scrollspy>
          </div>
        </aside>
        <main className="post flex-auto mt-10 prose lg:prose-xl dark:prose-invert">
          <div id='blogpost' className="">
            <h1>{post.title}</h1>
            <div className="" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </main>
      </div>
  )
}
export const Head = ({data}) => <Seo title={data.markdownRemark.frontmatter.title} />
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
      tableOfContents
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
    post.toc = md.tableOfContents;


    return post;

  //  }
  // )

}