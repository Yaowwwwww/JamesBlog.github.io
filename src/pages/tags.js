import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/Layout";

const Tags = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const tagMap = new Map();
  for (const post of posts) {
    if (post.frontmatter.tags !== null) {
      for (const tag of post.frontmatter.tags) {
        if (tagMap.has(tag)) {
          tagMap.set(tag, tagMap.get(tag) + 1);
        } else {
          tagMap.set(tag, 1);
        }
      }
    }
  }
  const tagPair = Array.from(tagMap);
  tagPair.sort((left, right) => right[1] - left[1]);
  return (
    <Layout location={location} title={"SOTO | Tags"}>
      <SEO title="Tags" />
      <h1 className={"text-3xl font-bold my-3"}>
        Tags | 标签
      </h1>
      <hr />
      <div>
        {tagPair.map(([tag, count]) => {
          return (
            <div>
              <Link to={"tag/" + tag}>{tag}</Link>
              <span>{count}</span>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
          tags
        }
      }
    }
  }
`;
