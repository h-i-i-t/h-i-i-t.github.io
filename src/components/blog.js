import * as React from "react"
import _ from "lodash"

import ShareSns from "../components/share-sns"

const Blog = ({ post, url }) => {

  return (
    <article
      className="blog-post"
      // style={{ width: "100%", }}
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        {
          post.frontmatter.tags ? post.frontmatter.tags.map((tag, i) => <span key={i} style={{margin: 8, padding: 10, fontSize: '0.8em', backgroundColor: "#E6E6E6", borderRadius: "30px"}} ><a style={{textDecoration: `none`}} href={`/${process.env.GATSBY_ROUTE_TAG}/${_.kebabCase(tag)}/`}>{tag}</a></span>) : ''
        }
      </header>
      <hr style={{marginTop: 12, marginBottom: 24}}/>
      {/* ↓↓↓↓目次↓↓↓↓ */}
      {
        post.tableOfContents ?
            <div style={{ backgroundColor: "#FEFEFE", border: "solid #EFEFEF", borderRadius: 4 }}>
              <h1 style={{ margin: 16 }}>目次</h1>
              <div style={{ margin: 24 }} dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
            </div>
        : ''
      }
      {/* ↑↑↑↑目次↑↑↑↑ */}
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />
      {/* 日本語を含むためエンコードする */}
      <ShareSns title={post.frontmatter.title} url={encodeURI(url)} />
      <hr />
    </article>
  )
}

export default Blog