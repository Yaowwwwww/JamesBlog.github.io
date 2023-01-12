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
    <article className={"flex flex-col items-center relative p-6 bg-white rounded-xl shadow-lg"} itemScope
             itemType="https://schema.org/Article">
      <div>
        <img src={post.frontmatter.image} className={"rounded-xl"} alt={""} />
      </div>
      <div>
        <header className={"my-3 font-sans text-2xl font-bold"}>
          <h1>
            <span itemProp="headline">{post.frontmatter.title || post.fields.slug}</span>
          </h1>
        </header>
        <section className={"text-gray-500"}>
          <p className={"truncate..."}
             dangerouslySetInnerHTML={{
               __html: post.frontmatter.description || post.excerpt
             }}
             itemProp="description"
          />
          <small>{post.frontmatter.date}</small>
        </section>
      </div>
    </article>
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
