import * as React from "react";
import graphql from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({
                            data: { site, markdownRemark: post },
                            location
                          }) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          <h1 className={"text-4xl font-bold my-3"} itemProp="headline">{post.frontmatter.title}</h1>
          <p className={"text-md text-gray-500 my-3"}>{post.frontmatter.date}</p>
          <img className={"rounded-xl my-3"} src={post.frontmatter.image} alt={"cover"} />
        </header>
        <section
          className="
          prose md:prose-lg lg:prose-xl
          prose-img:rounded-xl
          prose-a:text-blue-500 hover:prose-a:text-blue-400
          "
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        image
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
