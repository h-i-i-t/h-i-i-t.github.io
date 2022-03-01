import { createTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'

const MuiThemeProvider = ({ children }) => {
    const theme = createTheme({
        palette: {
            type: 'light',
            // primary: {
            //     main: '#fff',
            // },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default MuiThemeProvider