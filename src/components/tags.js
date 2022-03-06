/* タグリスト */
import * as React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import TagIcon from '@mui/icons-material/Tag';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  tags: {
    // display: `flex`,
    // flexWrap: `wrap`,
    // justifyContent: `center`,
    // alignItems: `center`,
  },
  selectedTag: {
    color: `blue`,
  }
});

// const sortTotalCount = (tags) => orderBy(tags, ['totalCount', 'fieldValue'], ['desc']);

const Tags = ({ tags, selectedTag }) => {
  const classes = useStyles()
  return (
    <div className={classes.tags}>
      {/* {sortTotalCount(tags).map(tag => ( */}
      {tags.map( tag => (
        <li key={tag.fieldValue}>
          <TagIcon style={{ "paddingTop": "2px", "fontSize": "1.0em", color: "#09427B" }}/>
          <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`} className={selectedTag === tag.fieldValue ? classes.selectedTag : '' }>
            {tag.fieldValue}
            <span> : {tag.totalCount}</span>
          </Link>
        </li>
      ))}
    </div>
  )
}


export default Tags