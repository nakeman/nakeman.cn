import * as React from "react"
import ModelLayout from "../components/ModelLayout"
import Seo from "../components/seo"
import {Brand} from "../components/header.js"
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../images/man-logo.jpg"

const IndexPage = () =>{
    
    return(
        <ModelLayout>
            <div className="p-3"><StaticImage src="../images/man-logo.jpg" alt="" /></div>
            <div className="flex flex-col md:flex-row items-center justify-center"><Brand /> <p className="text-2xl text-gray-500 font-light">博客新版改造中，敬请期待！</p></div>
        </ModelLayout>

    )
}

export const Head = ({ location, params, data, pageContext }) => (
    <>
      {/* <link rel="shortcut icon" type="image/jpg" href={logo} />  */}
      <Seo title="INDEX" />
    </>
  )
export default IndexPage