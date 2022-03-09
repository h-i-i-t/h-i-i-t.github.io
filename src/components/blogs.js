/* 記事リスト */
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from '@mui/material';

const BlogImage = styled("div")(({ theme }) => ({
  ...theme.mixins.blogImage,
  float: "left",
  maxWidth: "250px",
  width: "30%",
  margin: "24px",
  marginLeft: 0,
}));

const BlogHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.blogHeader,
  marginBottom: "16px",
}));

const Blogs = ({ posts }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

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
              style={{
                width: "100%",
                padding: 8,
                // border: "solid",
              }}
            >
              {
                post.frontmatter.hero ?
                  <BlogImage>
                    <GatsbyImage style={{borderRadius: 8}} image={getImage(post.frontmatter.hero?.childImageSharp.gatsbyImageData)} alt={post.frontmatter.title} />
                    <small style={{ fontSize: "0.65em", fontWeight: "normal", }}>{post.frontmatter.date}</small>
                  </BlogImage>
                : ""
              }
              <BlogHeader>
                <Link to={`${post.fields.slug}`} style={{ textDecoration: `none`, }}>
                    {title}
                </Link>
              </BlogHeader>
              {
                !post.frontmatter.hero || isMobile ? <small>{post.frontmatter.date}</small> : ''
              }
              <section>
                  <p
                    style={{ overflow: "hidden" }}
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