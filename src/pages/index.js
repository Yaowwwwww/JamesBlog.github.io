import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {StaticImage} from "gatsby-plugin-image";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
                  <li key={post.fields.slug}>
                      <Card {...post} />
                      {/*<article*/}
                      {/*    className="post-list-item"*/}
                      {/*    itemScope*/}
                      {/*    itemType="http://schema.org/Article"*/}
                      {/*>*/}
                      {/*    <header>*/}
                      {/*        <h2>*/}
                      {/*            <Link to={post.fields.slug} itemProp="url">*/}
                      {/*                <span itemProp="headline">{title}</span>*/}
                      {/*            </Link>*/}
                      {/*        </h2>*/}
                      {/*        <small>{post.frontmatter.date}</small>*/}
                      {/*    </header>*/}
                      {/*    <section>*/}
                      {/*        <p*/}
                      {/*            dangerouslySetInnerHTML={{*/}
                      {/*                __html: post.frontmatter.description || post.excerpt,*/}
                      {/*            }}*/}
                      {/*            itemProp="description"*/}
                      {/*        />*/}
                      {/*    </section>*/}
                      {/*</article>*/}
                  </li>
          )
        })}
      </ol>
    </Layout>
  )
}

const Card = (post) => (
    <Link to={post.fields.slug} itemProp="url">
        <div className={card}>
            <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                <header>
                    <h1 className="text-3xl font-bold">
                        <span itemProp="headline">{post.frontmatter.title}</span>
                    </h1>
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
        </div>
    </Link>
)

const card = "p-6 max-w-64 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
  }
`
