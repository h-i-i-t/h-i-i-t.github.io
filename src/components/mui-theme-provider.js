import { createTheme, CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material"
import React from "react"

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      type: "light",
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
