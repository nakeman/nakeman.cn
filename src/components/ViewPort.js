import * as React from "react"

const Viewport = ({children}) => {
    return(
        <>
            {/* <div class="flex flex-col border-red-100 h-screen border-4">{children}</div> */}
            <div class="flex flex-col justify-center items-center h-screen">{children}</div>
        </>
    )
}

export default Viewport;
