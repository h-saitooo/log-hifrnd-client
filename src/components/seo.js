import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  lang,
  description,
  meta,
  title,
  slug,
  imageSource,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = imageSource ? `${site.siteMetadata.siteUrl}${imageSource}` : `${site.siteMetadata.siteUrl}/opg.png`
  const pageType = title ? `webpage` : `article`
  const pageUrl = slug ? `${site.siteMetadata.siteUrl}${slug}` : `${site.siteMetadata.siteUrl}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : `${site.siteMetadata.title}`}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : `${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `og:type`,
          content: pageType
        },
        {
          name: `og:url`,
          content: pageUrl
        },
        {
          name: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string,
  slug: PropTypes.string,
  imageSource: PropTypes.string,
}

export default SEO
