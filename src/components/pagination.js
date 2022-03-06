import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@mui/styles"
import * as mui from "@mui/material"

const useStyles = makeStyles({
    root: {
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `center`,
        alignItems: "center",
    },
});

const Pagination = ({ pageContext }) => {
    const classes = useStyles()
    const { numberOfPages, humanPageNumber } = pageContext

    const handleChange = (_event, value) => {
        value === 1 ? navigate(`/page`) : navigate(`/page/${value}`)
    }
    return (
        <div className={classes.root}>
            <mui.Pagination
                variant="outlined"
                defaultPage={humanPageNumber}
                count={numberOfPages}
                onChange={handleChange}
                // size="small"
                color="primary"
                shape="rounded"
            />
        </div>
    )
}
export default Pagination