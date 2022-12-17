import * as React from "react"
import Viewport from "./ViewPort"
import { Navigation } from "./Navigation"

const PageLayout = ({children}) =>{
    
    return(
        <Viewport>
            <Navigation />
            <header class="border-green-400 border-2 h-20">标题栏高度固定</header>
            <main class="flex flex-1 border-red-400 border-2">{children}</main>
            <footer class="border-blue-400 border-2 h-20">footer</footer>
        </Viewport>

    )
}
export default PageLayout