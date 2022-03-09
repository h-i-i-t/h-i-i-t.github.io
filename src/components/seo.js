/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import defaultOgpImage from "../images/default-ogp-image.png";

const Seo = ({ description, lang, meta, title, image, url, type}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogpImage = image?.images?.fallback ? `${site.siteMetadata.siteUrl}${image.images.fallback.src}` : `${site.siteMetadata.siteUrl}${defaultOgpImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      head={{prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:image`,
          content: ogpImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:url`,
          content: url || site.siteMetadata?.siteUrl,
        },
        {
          property: `og:image`,
          content: ogpImage,
        },
        {
          property: `og:width`,
          content: 1200,
        },
        {
          property: `og:height`,
          content: 600,
        },
        {
          property: `site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: {},
  url: ``,
  type: `website`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  url: PropTypes.string,
  type: PropTypes.string,
}

export default Seo
