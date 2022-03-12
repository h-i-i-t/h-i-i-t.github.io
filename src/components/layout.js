import * as React from "react"
import { Link } from "gatsby"
import { styled } from "@mui/material/styles";

const FlexHeader = styled(`div`)({
  width: `100%`,
  display: `flex`,
  justifyContent: `space-start`,
  flexWrap: `wrap`,
  "@media (max-width:375px)": {
    justifyContent: `space-between`,
  },
});

const HLink = styled(Link)({
  margin: 32,
  marginLeft: `32px`,
  marginRight: `32px`,
  fontSize: `1.3em`,
  fontWeight: `bold`,
  textDecoration: `none`,
});

const Footer = styled(`footer`)({
  display: `flex`,
  justifyContent: `center`,
});

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <FlexHeader>
        <HLink to={`/`}>
          {`hi1t0`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_BLOG}`}>
          {`blog`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_TAG}`}>
          {`tag`}
        </HLink>
      </FlexHeader>
    )
  } else {
    header = (
      <FlexHeader>
        <HLink to={`/`}>
          {`hi1t0`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_BLOG}`}>
          {`blog`}
        </HLink>
        <HLink to={`/${process.env.GATSBY_ROUTE_TAG}`}>
          {`tag`}
        </HLink>
      </FlexHeader>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className="global-wrapper" >{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </div>
  )
}

export default Layout
