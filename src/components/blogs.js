/* 記事リスト */
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from '@mui/material';

const BlogContainer = styled("article")(({ theme }) => ({
  ...theme.mixins.blogContainer,
}));

const BlogImage = styled("div")(({ theme }) => ({
  ...theme.mixins.blogImage,
}));

const BlogTitle = styled("div")(({ theme }) => ({
  ...theme.mixins.blogTitle,
}));

const Blogs = ({ posts }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <BlogContainer key={post.fields.slug}>
            {
              post.frontmatter.hero ?
                <BlogImage>
                  <GatsbyImage style={{borderRadius: 8, objectFit: "fill",}} image={getImage(post.frontmatter.hero?.childImageSharp.gatsbyImageData)} alt={post.frontmatter.title} />
                </BlogImage>
              : ""
            }
            <BlogTitle>
              <Link to={`${post.fields.slug}`} style={{ textDecoration: `none`, }}>
                  {title}
              </Link>
            </BlogTitle>
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
          </BlogContainer>
        )
      })}
    </ol>
  )
}

export default Blogs