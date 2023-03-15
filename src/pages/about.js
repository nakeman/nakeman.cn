import React from 'react'
// import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = ({data}) =>{
      
      return (
        <section className="about container mx-auto px-4">
          <div className="mt-2 md:mt-10">
            <section className="header flex justify-end">
              <h1 className="mb-3 text-5xl font-bold">关于</h1>
            </section>
          </div>
          <section className="flex flex-col gap-4 font-light leading-6 ">
            <StaticImage
              className="mx-auto"
              src="../images/qianli.png"
              objectFit="fill"
              alt="留一个彩蛋，小女孩是一个豆瓣友邻的作品，她叫sy"
            ></StaticImage>
            <div className='dark:text-white'>
              <p className="text-lg md:text-xl">
                本博客主要记录了 我在 <em>Web开发</em> 领域的
                学习和研究经验，当然也有相当的技术翻译，和非编程文章，也有我的成长记录。作为了半路出家的开发者，Github
                上也开始发布一些公开的代码。
              </p>
              <p>
                <hr className="my-10" />
              </p>
              <p>
                P.S. 本博客站点图片源自网络，其中部分绘画作品出自豆瓣友邻{" "}
                <a
                  href="https://www.douban.com/people/shiyaoshiyao/"
                  target="_blank"
                >
                  村妇拾幺
                </a>
                。仅作装饰，默默感谢 。{" "}
              </p>
            </div>
          </section>
        </section>
      )
}

// export const Head = ({data}) => <Seo title={data.siteMeta.siteMetadata.description} />
export default AboutPage