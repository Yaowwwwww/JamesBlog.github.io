import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";

const BlogTagPostsTemplate = ({ location, data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout location={location}>
      <h1 className={"btn btn-outline btn-primary gap-2 text-3xl font-bold my-3"}>
        {pageContext.targetTag}
        <div className="badge bg-green-soto">{posts.length}</div>
      </h1>
      <hr className={"my-3"} />
      <ol className={"flex flex-col space-y-6"} style={{ listStyle: `none` }}>
        {posts.map(post => <li><Card {...post} /></li>)}
      </ol>
    </Layout>
  );
};

export default BlogTagPostsTemplate;

export const Head = () => <Seo title="Tag Posts" />;

export const pageQuery = graphql`
  query BlogPostByTag($targetTag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
    filter: {frontmatter: {tags: {eq: $targetTag}, draft: {ne: true}}}, 
    sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          tags
          slug
          tags
        }
      }
    }
  }
`;
