import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"
import Blogs from "../components/blogs"

const TagsAndBlogListTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const posts = data.selectedTag.nodes
  const tags = data.allTag.group
  /*
   * タグでフィルターしているため複数のタグがある記事を
   * タグの数だけ取得してしまうから重複を排除
   */
  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.fields.slug, post])).values()
  );

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="TagList" />
      <Bio />
      <Tags tags={tags} selectedTag={pageContext.tag}/>
      <Blogs posts={uniquePosts} />
      {/* <ul>
        {
          uniquePosts.map((node) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })
        }
      </ul> */}
      {/* <TagIcon style={{ "paddingTop": "2px", "fontSize": "1.0em", color: "#09427B" }} /><Link to="/tags">All tags</Link> */}
    </Layout>
  )
}

export default TagsAndBlogListTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    selectedTag: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { glob: $tag }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    allTag: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`