import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol className={"flex flex-col space-y-6"} style={{ listStyle: `none` }}>
        {posts.map(post => {
          return (
            <li key={post.fields.slug}>
              <Card {...post} />
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

const Card = (post) => (
  <Link to={post.fields.slug} itemProp="url">
    <div className={"flex items-center relative p-6 bg-white rounded-xl shadow-lg"}>
      <article itemScope itemType="https://schema.org/Article">
        <img src={post.frontmatter.image} className={"rounded-xl"} alt={""} />
        <div className={"relative bottom-0"}>
          <header>
            <h1 className="text-2xl font-bold">
              <span itemProp="headline">{post.frontmatter.title || post.fields.slug}</span>
            </h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <section className={"h-10"}>
            <p className={"truncate..."}
               dangerouslySetInnerHTML={{
                 __html: post.frontmatter.description || post.excerpt
               }}
               itemProp="description"
            />
          </section>
        </div>
      </article>
    </div>
  </Link>
);


export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

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
          image
        }
      }
    }
  }
`;
