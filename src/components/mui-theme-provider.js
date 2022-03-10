import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import React from "react"

/* responsive */
// import { useTheme, useMediaQuery } from '@mui/material';
// const theme = useTheme();
// const isMobile = useMediaQuery(theme.breakpoints.down("md"));
// theme.breakpoints.up(xs)
// theme.breakpoints.only(xs)
// theme.breakpoints.between(xs, sm)


const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      // primary: {
      //     main: '#fff',
      // },
    },
    mixins: {
      root: {
        // [theme.breakpoints.down("xs")]: { // iphone7以下
        //     backgroundColor: theme.palette.secondary["A100"],
        // },
        // "@media (max-width:375px)": {
        //     width: "100px",
        // },
        // [theme.breakpoints.up("xs")]: {
        //     backgroundColor: theme.palette.primary["300"],
        // },
        // "@media (min-width:375px)": {
        //     width: "200px",
        // },
        // [theme.breakpoints.up("sm")]: {
        //     backgroundColor: theme.palette.secondary["A700"],
        // },
        // "@media (min-width:768px)": {
        //     width: "300px",
        // },
        // [theme.breakpoints.up("md")]: {
        //     backgroundColor: theme.palette.primary.main,
        // },
        // "@media (min-width:992px)": {
        //     width: "400px",
        // },
        // [theme.breakpoints.up("lg")]: {
        //     backgroundColor: "green",
        // },
        // "@media (min-width:1400px)": {
        //     width: "500px",
        // },
        position: "absolute",
        width: "100%",
        margin: "0 auto",
      },
      body: {
        // padding: theme.spacing(3), 8*3
        padding: "24px",
        // [theme.breakpoints.up('sm')]
        // "@media (min-width:768px)": {
        //     width: `calc(100% - ${Number(process.env.REACT_APP_DRAWER_WIDTH)}px)`,
        //     marginLeft: Number(process.env.REACT_APP_DRAWER_WIDTH),
        // },
        alignItems: "center",
        justifyContent: "center",
      },
      blogContainer: {
        width: "100%",
        minHeight: "250px",
        marginBottom: "24px",
        "@media (max-width:375px)": {
          minHeight: "150px",
        },
        "@media (min-width: 376px) and (max-width:768px)": {
        },
        "@media (min-width: 769px)" : {
        },
      },
      blogImage: {
        float: "left",
        maxWidth: "250px",
        width: "30%",
        margin: "24px",
        marginLeft: 0,
        borderRadius: 8,
        "@media (max-width:375px)": {
          float: "none",
          minWidth: "320px",
          minHeight: "100px",
          maxHeight: "160px",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
        },
        "@media (min-width: 376px) and (max-width:768px)": {
          // fontSize: "1.2em",
        },
        "@media (min-width: 769px)" : {
          // fontSize: "1.2em",
        },
      },
      blogTitle: {
        fontWeight: "bold",
        "@media (max-width:375px)": {
          fontSize: "1.0em",
          marginBottom: "8px",
        },
        "@media (min-width: 376px) and (max-width:768px)": {
          fontSize: "1.2em",
          marginBottom: "16px",
        },
        "@media (min-width: 769px)" : {
          fontSize: "1.5em",
          marginBottom: "24px",
        },
      },
    },
    // レスポンシブのブレイクポイント
    'breakpoints': {
      'keys': [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
      ],
      'values': {
        'xs': 376, // スマホ用
        'sm': 768, // タブレット用
        'md': 992, // PC用
        'lg': 1400,
        'xl': 1800,
      },
    },
    typography: {
      // useNextVariants: true, // Migration to typography v2
      // htmlFontSize: 10,
      // fontSize: 10,
      // fontFamily: '"Yu Gothic", "Yu Gothic Medium", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    // classのstyleを上書き
    overrides: {
      MuiButton: {
        root: {
          // ボタン内アルファベット文字を大文字変換しない
          // textTransform: 'none',
          // borderRadius: 30,
          // width: window.parent.screen.width - window.parent.screen.width / 10,
          // height: 50,
          // fontSize: '1.0em',
        },
        containedPrimary: {
          // color: '#ffffff',
        },
        containedSecondary: {
          // color: '#00000099',
        },
      },
      MuiInput: {
        root: {
          // width: window.parent.screen.width - window.parent.screen.width / 10,
        },
      },
      MuiBottomNavigationAction: {
        wrapper: {
          // marginTop: '3px',
        },
        label: {
          // fontSize: '0.9em',
        },
      },
      MuiSvgIcon: {
        root: {
          // marginBottom: '-3px',
        },
      },
      MuiTypography: {
        body1: {
          // fontSize: '1em',
        },
      },
      MuiTable: {
        root: {
          // size: 'small',
          // '@media (min-width: 500px) .table': {
              // minWidth: '250px',
          // },
        },
      },
      MuiDialog: {
        paper: {
          // margin: '0px',
        },
      },
      MuiDialogContent: {
        root: {
          // '&:first-child': {
          //     paddingTop: "0px",
          // },
        },
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
