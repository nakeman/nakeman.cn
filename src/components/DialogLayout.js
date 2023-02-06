import * as React from "react"
import Viewport from "./ViewPort"

const DialogLayout = ({children}) =>{
    
    return(
        <Viewport>
            <div className="flex flex-col justify-center items-center">{children}</div>
        </Viewport>

    )
}
export default DialogLayout