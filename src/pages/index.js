import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";

export const Head = () => <Seo title="Recent Posts" />;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <p className={"text-gray-500 my-3"}>
        Welcome! I’m Zhou Zihang. 🥳<br/>
        This is a place where I share my life, thoughts, and other stuff that might be interesting.
      </p>
      <div className="divider"></div>
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
        excerpt(truncate: true, pruneLength: 80)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          image
          slug
          tags
        }
      }
    }
  }
`;
