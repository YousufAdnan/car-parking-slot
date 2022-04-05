/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles"
import Header from "./header"
import "./layout.css"
import carBg from "../images/car-bg.jpg"
import { Box } from "@mui/material"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = styles()
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box className={classes.background}>
        <main>{children}</main>
      </Box>
    </>
  )
}

const styles = makeStyles({
  background: {
    margin: `0 auto`,
    padding: `5vw 1.0875rem 1.45rem`,
    backgroundImage: `url(${carBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    height: "50vw !important",
  },
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
