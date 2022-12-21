import * as React from "react"
import PageLayout from "../components/PageLayout"
import Seo from "../components/Seo"

const IndexPage = () =>{
    
    return(
        <PageLayout>
            <div class="hidden md:block basis-1/4 border-red-400 border-2">01 这一列占下剩余所有空间</div>
            <div class="basis-1/2 border-red-400 border-2">02</div>
            <div class="flex-1 border-red-400 border-2">03</div>
        </PageLayout>

    )
}
export const Head = () => <Seo title="INDEX" />
export default IndexPage