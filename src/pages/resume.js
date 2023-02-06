import React from 'react'
// import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"

const ResumePage = ({data}) =>{
      
      return (
        <section className="resume container mx-auto px-4">
        <div className="mt-2 md:mt-10">
          <section className='header flex justify-end'>
              <h1 className="mb-3 text-5xl font-bold">简历</h1>
          </section>
        </div>
        
      </section>
      )
}

// export const Head = ({data}) => <Seo title={data.siteMeta.siteMetadata.description} />
export default ResumePage