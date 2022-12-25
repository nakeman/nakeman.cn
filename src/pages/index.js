import * as React from "react"
import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import './index.css'

const IndexPage = () =>{
    
    return (
      <PageLayout>
        <div className="index container mx-auto px-4">
          <div className="herox flex flex-col md:flex-row">
            <div className="hero w-full md:w-1/2">
              <h1 className="headline mb-4 md:mx-4">你好！</h1>
              <div className=" text-lg md:text-xl md:mx-4">
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
            <div className="heading">最新文章</div>

          </section>
        </div>
      </PageLayout>
    )
}
export const Head = () => <Seo title="INDEX" />
export default IndexPage