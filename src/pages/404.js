import * as React from "react"

import DialogLayout from "../components/DialogLayout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <DialogLayout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DialogLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
