import * as React from "react"
import { Link, graphql } from "gatsby"
import InsertCommentIcon from '@mui/icons-material/InsertComment';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogs from "../components/blogs"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const url = `${data.site.siteMetadata?.siteUrl}${location.pathname}`

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo url={url} title="メインページ" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="hi1t0Index" type="website" />
      <Bio />
      <hr />
      <h4 style={{marginTop: "24px", marginBottom: "48px"}}>最新記事</h4>
      <Blogs posts={posts} />
      <InsertCommentIcon style={{ "paddingTop": "2px", "fontSize": "1.0em", color: "#09427B" }}/><Link to={`/${process.env.GATSBY_ROUTE_BLOG}`}>すべての記事を見る</Link>
      <hr />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      skip: 0
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          hero {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
