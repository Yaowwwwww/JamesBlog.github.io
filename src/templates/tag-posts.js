import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";

const BlogTagPostsTemplate = ({ location, data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts);
  return (
    <Layout location={location}>
      <h1 class="title has-text-black">Posts for tag: <span class="tag is-large is-info">{pageContext.targetTag}</span>
      </h1>
      <p class="subtitle">{posts.length + " posts"}</p>
      <hr />
      {posts.map(post => (
            <Card {...post} />
      ))}
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
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $targetTag}}}, sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          tags
        }
      }
    }
  }
`;
