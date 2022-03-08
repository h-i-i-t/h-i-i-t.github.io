import * as React from "react"
import { Link } from "gatsby"
import { styled } from "@mui/material/styles";

const HLink = styled(Link)({
  marginLeft: `32px`,
  marginRight: `32px`,
  fontSize: `1.3em`,
  fontWeight: `bold`,
  textDecoration: `none`,
});

const Layout = ({ location, title, children }) => {
  // const classes = useStyles()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <HLink to={`/`}>
          {`hi1t0`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_BLOG}`}>
          {`blog`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_TAG}`}>
          {`tag`}
        </HLink>
      </div>
    )
  } else {
    header = (
      <div>
        <HLink to={`/`}>
          {`hi1t0`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_BLOG}`}>
          {`blog`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_TAG}`}>
          {`tag`}
        </HLink>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
