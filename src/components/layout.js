import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    header: {
      marginLeft: `32px`,
      marginRight: `32px`,
      fontSize: `1.3em`,
      fontWeight: `bold`,
      textDecoration: `none`,
    },
});

const Layout = ({ location, title, children }) => {
  const classes = useStyles()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <Link className={classes.header} to="/">
          {`hi1t0`}
        </Link>
        <Link className={classes.header} to="/page">
          {`blog`}
        </Link>
        <Link className={classes.header} to="/tags">
          {`tags`}
        </Link>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className={classes.header} to="/">
          {`hi1t0`}
        </Link>
        <Link className={classes.header} to="/page">
          {`blog`}
        </Link>
        <Link className={classes.header} to="/tags">
          {`tags`}
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
