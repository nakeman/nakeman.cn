import * as React from "react"

import ModelLayout from "../components/ModelLayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <ModelLayout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ModelLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
