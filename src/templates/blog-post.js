import * as React from "react";
import { graphql, Link } from "gatsby";

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
          <p className={"text-md text-gray-500 my-3"}>
            <span className={"mx-2"}>{post.frontmatter.date}</span>
            {post.frontmatter.tags ? (
              post.frontmatter.tags.map(tag=>(
                  <Link className={"btn btn-ghost btn-sm mx-1"} to={`/tags/${tag}`}>
                    {tag}
                  </Link>
              ))
            ):null}
          </p>
          {(post.frontmatter.image!==null && post.frontmatter.image!=="")?
            (<img className={"rounded-xl my-3"} src={post.frontmatter.image} alt={"cover"} />):null}
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
        <hr className={"my-3"} />
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
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(truncate: true)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        image
        tags
      }
    }
  }
`;
