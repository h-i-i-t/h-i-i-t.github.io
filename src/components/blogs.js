/* 記事リスト */
import * as React from "react"
import { Link } from "gatsby"


const Blogs = ({ posts }) => {

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
            >
            <header>
                <h2>
                <Link to={`${post.fields.slug}${post.frontmatter.title}`} itemProp="url">
                    <span itemProp="headline">{title}</span>
                </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
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