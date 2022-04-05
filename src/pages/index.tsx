import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import InputComp from "../components/InputComp"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <InputComp />
  </Layout>
)

export default IndexPage
