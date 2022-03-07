import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import React from "react"

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      // primary: {
      //     main: '#fff',
      // },
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
