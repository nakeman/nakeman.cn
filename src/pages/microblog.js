import React, { useState, useEffect } from 'react'
// import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"

const MicroBlogPage = ({data}) =>{
      
      return (
        <section className="microblog container mx-auto px-4">
        <div className="mt-2 md:mt-10">
          <section className='header flex justify-end'>
              <h1 className="mb-3 text-5xl font-bold">Micor Blog</h1>
          </section>
        </div>
        
      </section>
      )
}

// export const Head = ({data}) => <Seo title={data.siteMeta.siteMetadata.description} />
export default MicroBlogPage