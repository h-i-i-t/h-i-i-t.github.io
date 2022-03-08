/* 記事リスト */
import * as React from "react"
import { Link } from "gatsby"


const Blogs = ({ posts }) => {

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug} style={{ width: "100%", padding: 8 }}>
            <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
            >
              {
                post.frontmatter.hero ?
                  <div style={{
                    float: "left",
                    maxWidth: "250px",
                    maxHeight: "250px",
                    width: "30%",
                    height: "30%",
                    margin: "24px",
                    marginLeft: 0,
                  }}>
                    <img
                      alt={`${post.frontmatter.title}`}
                      src={`${post.frontmatter.hero.childImageSharp.fluid.originalImg}`}
                      style={{ width: "100%", borderRadius: 24, }}
                    />
                    <small>{post.frontmatter.date}</small>
                  </div>
                : ""
              }
              <header>
                  <h2>
                  <Link to={`${post.fields.slug}${post.frontmatter.title}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                  </Link>
                  </h2>
                  {
                    !post.frontmatter.hero ? <small>{post.frontmatter.date}</small> : ''
                  }
              </header>
              <section>
                  <p
                  dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                  />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}

export default Blogs