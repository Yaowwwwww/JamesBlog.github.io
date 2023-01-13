import React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";

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
      <h1 className={"text-3xl font-bold my-3"}>
        Tags
      </h1>
      <hr className={"my-3"}/>
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

export const Head = () => <Seo title="Tags" />;

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
