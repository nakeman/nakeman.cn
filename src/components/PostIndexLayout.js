import React from 'react'

import { PostIndexSidebar } from './PostIndexSidebar'
import "./PostIndex.css"

/**
 * PostIndexLayout: All 1)posts, 2)categories,3)taged posts index page's common layout
 */
export const PostIndexLayout = ({ children }) => {
  return (
    <section className="postindex container mx-auto ">
      <div className='  flex flex-col md:flex-row gap-3 mt-2 md:mt-10'>
        <div className="ponstindexsidebar flex md:flex-row px-0 md:px-5 w-full md:w-1/4 ">
          <PostIndexSidebar />
        </div>
        <div className="postindex w-full md:w-3/4 ">{children}</div>
      </div>
    </section>
  )
}
