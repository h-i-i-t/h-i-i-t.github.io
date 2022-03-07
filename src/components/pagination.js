import React from "react"
import { navigate } from "gatsby"
import { styled } from "@mui/material/styles";
import * as mui from "@mui/material"

const PGRoot = styled("div")({
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: `center`,

});

const Pagination = ({ pageContext }) => {
    const { numberOfPages, humanPageNumber } = pageContext

    const handleChange = (_event, value) => {
        value === 1 ? navigate(`/page`) : navigate(`/page/${value}`)
    }
    return (
        <PGRoot>
            <mui.Pagination
                variant="outlined"
                defaultPage={humanPageNumber}
                count={numberOfPages}
                onChange={handleChange}
                // size="small"
                color="primary"
                shape="rounded"
            />
        </PGRoot>
    )
}
export default Pagination