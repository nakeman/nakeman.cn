import * as React from "react"
import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import './index.css'
import logo from "../images/man-logo.jpg"

const IndexPage = () =>{
    
    return (
      <PageLayout>
        <div className="index container mx-auto px-4">
          <div className="herox flex flex-col md:flex-row">
            <div className="hero mt-10 w-full md:w-1/2">
              <h1 className="headline mb-4 md:mx-4 text-5xl">你好，朋友！</h1>
              <div className="description text-lg md:text-xl md:mx-4">
                <p>我叫刘建文，这是我的个人博客（Nake 裸 Man 人）。</p>
                <p>
                  我的职业是一名Web全栈开发者，但个人兴趣广泛，对哲学，历史，教育等都有相当的关注。<em>做研究</em>  是我最大的兴趣，此外，我还热爱运动，“运动书生”
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
          <section className="lastestpost">
            <h2 className="heading">
              <div>
                <div className="title">最新文章</div>              
              </div>
              <div className="">--</div>
            </h2>
            <PostList />
          </section>
          <section className="featuredpost">
            <h2 className="heading">
              <div>
                <div className="title">推荐文章</div>              
              </div>
              <div className="">--</div>
            </h2>
            <FeaturedList />
          </section>
          <section className="projects">
            <h2 className="heading">
              <div>
                <div className="title">公开项目</div>              
              </div>
              <div className="">--</div>
            </h2>
            <ProjectList />
          </section>
        </div>
      </PageLayout>
    )
}
export const Head = () => <Seo title="INDEX" />
export default IndexPage

const PostList = ({}) => {
  return ( 
    <div className="postlist">
      {
        [1,2,3,4,5].map( (item) =>  <PostItem id={item} />)
      } 
    </div>
   );
}
 
const PostItem = ({id}) => {
  return ( 
    <>
      <a href="slug" className="post"><h3>{id}  文章正题有不少的字呢 a blog article with name! </h3>  <time >2022.12.12</time></a>
      
    </>
   );
}
const FeaturedList = ({}) => {
  return ( 
    <div className="postlist grid  lg:grid-cols-2 xl:grid-cols-3">
      {
        [1,2,3,4,5,6].map( (item) =>  <PostCard id={item} />)
      } 
    </div>
   );
}
 
const PostCard = ({id}) => {
  return ( 
    <div className="flex rounded bg-white border-[1px] p-4 m-1 relative">
      <div className="img flex flex-col justify-center max-w-[50px]"><img src={logo} alt="" /> </div>
      <div className="ml-5">
        <time className="font-mono font-thin text-xs text-gray-500">2022.12.25 星期五</time>
        <a href="slug" className="postcard text-xl font-normal"><h3>{id} a blog article with a looooooooong name! </h3> </a>
      </div>
      
    </div>
   );
}

const ProjectList = ({}) => {
  return ( 
    <div className="projectlist grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        [1,2,3,4,5,6].map( (item) =>  <ProjectCard id={item} />)
      } 
    </div>
   );
}
 
const ProjectCard = ({id}) => {
  return ( 
    <div className="flex flex-col rounded bg-gray-100 p-4 m-1">
      <div className="ml-5">
        <time className="font-mono font-thin text-xs text-gray-500">2022</time>
        <a href="slug" className="prjectcard text-xl font-normal"><h3><span className="border rounded-full"> {id} </span>nakeman.cn 博客 </h3> </a>
        <sub> 这是一个人个博客，写作大量文章，和技术介保姆</sub>
      </div>
      <div className="link ml-3 p-2 mx-3">
        <a href="">Demo</a> <a href="">相关文章</a> <a href="">源码</a>
      </div>
      
    </div>
   );
}
