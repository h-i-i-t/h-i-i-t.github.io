// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"
import MuiThemeProvider from "./src/components/mui-theme-provider"

export const wrapRootElement = ({ element }) => {
  return <MuiThemeProvider>{element}</MuiThemeProvider>
}
