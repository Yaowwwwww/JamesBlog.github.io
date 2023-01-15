/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import("gatsby").GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SOTO-BLOG`,
    description: `SOTO-BLOG: Some stuff that might be interesting.`,
    siteUrl: `https://zzhgo.com/`,
    image: `https://pic.mcac.cc/202301012340641.jpg`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: [`**/Templates`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + (node.frontmatter.slug ? (`/` + node.frontmatter.slug) : node.fields.slug),
                  guid: site.siteMetadata.siteUrl + (node.frontmatter.slug ? (`/` + node.frontmatter.slug) : node.fields.slug),
                  custom_elements: [{ "content:encoded": node.html }]
                });
              });
            },
            query: `{
              allMarkdownRemark(
                filter: {frontmatter: {draft: {ne: true}}}
                sort: {frontmatter: {date: DESC}}
              ) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    slug
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "SOTO-BLOG"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SOTO-BLOG`,
        short_name: `SOTO`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/android-chrome-512x512.png` // This path is relative to the root of the site.
      }
    }
  ]
};
