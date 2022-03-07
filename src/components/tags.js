/* タグリスト */
import * as React from "react"
import _ from "lodash"
import { makeStyles } from "@mui/styles"
import { Chip } from "@mui/material"
// import TagIcon from '@mui/icons-material/Tag';

const useStyles = makeStyles({
  tagsContainer: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  tag: {
    margin: `4px`,
  },
  tagIcon: {
    paddingTop: `5px`,
    paddingBottom: `5px`,
  },
  tagsTotalCount: {
    marginLeft: `10px`,
  },
});

const sortTotalCount = (tags) => _.orderBy(tags, ['totalCount', 'fieldValue'], ['desc']);

const Tags = ({ tags, selectedTag }) => {
  const classes = useStyles()
  return (
    <div className={classes.tagsContainer}>
      {sortTotalCount(tags).map(tag => (
      // {tags.map( tag => (
        <div key={tag.fieldValue} className={classes.tag}>
          <Chip
            label={`${tag.fieldValue} ${tag.totalCount}`}
            component="a"
            href={`/tags/${_.kebabCase(tag.fieldValue)}/`}
            variant={selectedTag === tag.fieldValue ? `outlined` : ''}
            clickable
            // icon={<TagIcon className={classes.tagIcon} />}
          />
        </div>
      ))}
    </div>
  )
}


export default Tags