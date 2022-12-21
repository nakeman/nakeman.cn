import * as React from "react"

/**
 * A vh-max flex container |占据屏幕视口所有空间
 * @param {*} param0 
 * @returns 
 */
const Viewport = ({children}) => {
    return(
        <div class="flex flex-col justify-center items-center h-screen">{children}</div>
    )
}

export default Viewport;
