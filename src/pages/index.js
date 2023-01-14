import * as React from "react";
import { graphql, Link } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";

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
      <Link className="btn btn-wide btn-primary my-5 flex mx-auto" to={"/archive"}>MORE</Link>
    </Layout>
  );
};


export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Recent Posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {frontmatter: {draft: {ne: true}}}
        sort: {frontmatter: {date: DESC}}
        limit: 10
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          image
          slug
          tags
        }
      }
    }
  }
`;
