import React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";

export const Head = () => <Seo title="Tags" />;

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
      <div className="divider"></div>
      <div className="flex flex-wrap gap-4">
        {tagPair.map(([tag, count]) => {
          return (
            <Link className={"btn btn-outline btn-primary gap-2 text-lg font-bold"} to={"/tags/" + tag}>
              {tag}
              <div className="badge">{count}</div>
            </Link>
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
