/* タグリスト */
import * as React from "react"
import _ from "lodash"
import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material"

const TagsContainer = styled("div")({
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `center`,
  alignItems: `center`,
})

const TagDiv = styled("div")({
  margin: `4px`,
})

const sortTotalCount = (tags) => _.orderBy(tags, ['totalCount', 'fieldValue'], ['desc']);

const Tags = ({ tags, selectedTag }) => {
  return (
    <TagsContainer>
      {sortTotalCount(tags).map(tag => (
      // {tags.map( tag => (
        <TagDiv key={tag.fieldValue}>
          <Chip
            label={`${tag.fieldValue} ${tag.totalCount}`}
            component="a"
            href={`/tags/${_.kebabCase(tag.fieldValue)}/`}
            variant={selectedTag === tag.fieldValue ? `outlined` : ''}
            clickable
          />
        </TagDiv>
      ))}
    </TagsContainer>
  )
}


export default Tags