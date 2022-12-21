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
            <div class="h-20 w-full"><Header /></div>
            <main class="flex flex-1 w-full">{children}</main>
            <div class="h-20 w-full"><Footer/></div>
        </Viewport>

    )
}
export default PageLayout