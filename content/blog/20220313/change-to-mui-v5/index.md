---
title: material-ui v4 → v5で変わったこと
date: "2022-03-13T11:11:11.110Z"
tags: ["Gatsby", "tips", "mui", "Design"]
type: "blog"
---

import先変更、createThemeの中のpalette.type → palette.mode

makeStylesが非推奨になった



以前
```js
import { createTheme, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
          main: '#fff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
```

↓

```js
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import React from "react"

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
          main: '#fff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
```

makeStyles から styled

```js
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

  let header

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
  ...
```

↓

```js
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

  let header

  header = (
    <div>
      <HLink to="/">
        {`hi1t0`}
      </HLink>
      <HLink to="/page">
        {`blog`}
      </HLink>
      <HLink to="/tags">
        {`tags`}
      </HLink>
    </div>
  )
```

const classes = useStyles()

className={classes.header}

を書く必要がなくなった
