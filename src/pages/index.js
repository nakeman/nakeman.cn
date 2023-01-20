import React, { useState, useEffect } from 'react'
import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import './index.css'
import { graphql } from "gatsby"
import { projectsList } from '../common/projectdata'
import { PostList } from '../components/PostList'
import { rawMarkdown2LogicalPost } from '../common/utility'

const IndexPage = ({data}) =>{

  const [repos, setRepos] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.github.com/users/nakeman/repos?per_page=100');
        const data = await res.json();
        setRepos(data);
      }      
      catch(err)
      {
        console.log(err)
      }
    }
    fetchData();

  }, [])

  
  let latestposts = rawMarkdown2LogicalPost(data.latest.nodes);
  let featuredposts = rawMarkdown2LogicalPost(data.featured.nodes);
    
    return (
      <PageLayout>
        <div className="index container mx-auto px-4">
          <div className="herox flex flex-col md:flex-row">
            <div className="hero mt-10 w-full md:w-1/2">
              <h1 className="headline mb-4 text-5xl">你好，朋友！</h1>
              <div className="description text-lg md:text-xl">
                <p>欢迎来到Nakeman.cn（Nake 裸 Man 人）， 这是我的个人博客，我是刘建文。</p>
                <p>
                  我的职业是一名Web全栈开发者，我的业余兴趣比较广泛，对哲学，历史，教育等都有相当的关注。<em>做研究</em>  是我最大的兴趣，此外，我还热爱运动，“运动书生”
                  是我的一个标签，可用一名话形容我是个什么人：
                </p>
                <blockquote>
                  一个不会打毛毛球的书生，不是一个好的程序员。
                </blockquote>
                <p>
                  本博客主要记录了 我在 <em>Web开发</em> 领域的
                  学习和研究经验，当然也有相当的技术翻译，和非编程文章，也有我的成长记录。作为了半路出师的开发者，Github
                  上也开始发布一些公开的代码。    
                </p>
                <button type="button" class="inline-block px-6 py-2 border border-gray-600 text-gray-600 font-medium text-normal leading-tight uppercase rounded hover:bg-black hover:bg-opacity-95 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">更多...</button>
              </div>
            </div>
            <div className="decoration w-full md:w-1/2 p-5 flex justify-center"><StaticImage src="../images/shiyao.png" layout="fixed" width={300} objectFit="fill" alt="留一个彩蛋，小女孩是一个豆瓣友邻的作品，她叫sy" ></StaticImage></div>
          </div>
          <section className="latestpost">
            <h2 className="heading">
              <div>
                <div className="title">最新文章</div>              
              </div>
              <div className="">--</div>
            </h2>
            <PostList data={latestposts} newspaper />
          </section>
          <section className="featuredpost">
            <h2 className="heading">
              <div>
                <div className="title">推荐文章</div>              
              </div>
              <div className="">--</div>
            </h2>
            <FeaturedList data={featuredposts} />
          </section>
          <section className="projects">
            <h2 className="heading">
              <div>
                <div className="title">开源项目</div>              
              </div>
              <div className="">--</div>
            </h2>
            <ProjectList data={projectsList} repos={repos} />
          </section>
        </div>
      </PageLayout>
    )
}
export const Head = () => <Seo title="INDEX" />
export default IndexPage

// const PostList = ({data}) => {
//   return ( 
//     <div className="postlist">
//       {
//         data.map( (item) =>  <PostItem key={item.id} data={item} />)
//       } 
//     </div>
//    );
// }
 
// const PostItem = ({data}) => {
//   return ( 
//     <>
//       <a href={data.url} className="post"><h3>{data.categories} | {data.title} </h3>  <time >{data.date}</time></a>
      
//     </>
//    );
// }
const FeaturedList = ({data}) => {
  return ( 
    <div className="postlist grid  lg:grid-cols-2 xl:grid-cols-3">
      {
        data.map( (item) =>  <PostCard data={item} />)
      } 
    </div>
   );
}
 
const PostCard = ({data}) => {
  return ( 
    <div className="flex rounded bg-white border-[1px] p-4 m-1 relative">
      <div className="img flex flex-col justify-center max-w-[50px]"><GatsbyImage image={data.heroimage?.childImageSharp.gatsbyImageData} /> </div>
      <div className="ml-8">
        <time className="font-mono font-thin text-xs text-gray-500">{data.date}</time>
        <a href={data.url} className="postcard text-xl font-normal"><h3> {data.title} </h3> </a>
      </div>
      
    </div>
   );
}

const ProjectList = ({data,repos}) => {
  return ( 
    <div className="projectlist grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        data.map( (item) =>  <ProjectCard data={item} repos={repos} />)
      } 
    </div>
   );
}
 
const ProjectCard = ({data,repos}) => {
  return ( 
    <div className="flex flex-col rounded bg-gray-100 p-4 m-1">
      <div className=" relative ml-5">
          <div className="absolute right-1 top-1 stars ">
                    {repos.find((repo) => repo.name === data.name) && (
                      <div className="star text-amber-500 flex items-center gap-1 font-mono font-thin ">
                        <a
                          href={`https://github.com/nakeman/${data.name}/stargazers`}
                          className="mt-1 text-xs  text-gray-500 hover:text-gray-800 hover:underline hover:decoration-from-font"
                        >
                          {Number(
                            repos.find((repo) => repo.name === data.name)
                              .stargazers_count
                          ).toLocaleString()}
                        </a>
                        <StarIcon />
                      </div>
                    )} 
          </div>
          <div>
            <time className="font-mono font-thin text-xs text-gray-500">{data.date}</time>
          </div>
        
        <a href={data.url} className="prjectcard text-xl font-normal"><h3>{data.name} </h3> </a>
        <sub> {data.description}</sub>
      </div>
      <div className="link ml-3 p-2 mx-5 mt-auto">
        { data.demo &&(
        <a href={data.demo}>Demo</a> 
        )
        }
        <a href={data.document}>相关文章</a> 
        <a href={data.source}>源码</a>
      </div>
      
    </div>
   );
}

const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      style={{ width: '1rem', height: '1rem', fill: 'currentColor' }}
    >
      <path
        fillRule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    latest: allMarkdownRemark(limit: 10, sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          slug
          title
          date
          categories
          tags
        }
      }
    }
    featured: allMarkdownRemark(
      limit: 10
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {featured: {eq: true}}}
    ) {
      nodes {
        frontmatter {
          slug
          title
          date
          categories
          tags
          featured
          heroimage {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 65, height: 65)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`