import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    header: {
      marginLeft: `32px`,
      fontSize: `1.3em`,
      fontWeight: `bold`,
      textDecoration: `none`,
        // display: `flex`,
        // flexWrap: `wrap`,
        // justifyContent: `center`,
        // alignItems: "center",
    },
});

const Layout = ({ location, title, children }) => {
  const classes = useStyles()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/page">
          {title}
        </Link>
        <Link className={classes.header} to="/">
          {`home`}
        </Link>
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
