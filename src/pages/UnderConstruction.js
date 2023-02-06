import * as React from "react"
import DialogLayout from "../components/DialogLayout"
import Seo from "../components/Seo"
import {Brand} from "../components/Header"
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../images/man-logo.jpg"

const UCPage = () =>{
    
    return(
        <DialogLayout>
            <div className="p-3"><StaticImage src="../images/man-logo.jpg" alt="" /></div>
            <div className="flex flex-col md:flex-row items-center justify-center"><Brand /> <p className="text-2xl text-gray-500 font-light">博客新版改造中，敬请期待！</p></div>
        </DialogLayout>

    )
}

export const Head = ({ location, params, data, pageContext }) => (
    <>
      {/* <link rel="shortcut icon" type="image/jpg" href={logo} />  */}
      <Seo title="Under Construction" />
    </>
  )
export default UCPage