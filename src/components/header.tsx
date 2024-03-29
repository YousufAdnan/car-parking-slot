import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}
const Header = ({ siteTitle }: Props) => (
  <header
  // style={{
  //   background: `rebeccapurple`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    <div
    // style={{
    //   margin: `0 auto`,
    //   maxWidth: 960,
    //   padding: `1.45rem 1.0875rem`,
    // }}
    ></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
