import * as React from "react"
import Viewport from "./ViewPort"
import Header from "./Header"
import Footer from "./Footer"

/**
 * three rows(header main footer) page layout. top and bottom fixed, main flex.
 * layout only size and postion
 * @param {*} param0 
 */
const PageLayout = ({children}) =>{
    
    return(
        <Viewport>
            <div class="w-full bg-gray-100 "><Header /></div>
            <main class="flex  w-full">{children}</main>
            <div class="w-full mt-auto"><Footer/></div>
        </Viewport>

    )
}
export default PageLayout