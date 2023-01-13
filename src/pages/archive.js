import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Archive = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const timeMap = new Map();
  for (const post of posts) {
    if (post.frontmatter.date !== null) {
      const year = new Date(post.frontmatter.date).getFullYear();
      const month = new Date(post.frontmatter.date).toDateString().split(" ")[1];
      if (!timeMap.has(year)) {
        timeMap.set(year, new Map());
      }
      if (!timeMap.get(year).has(month)) {
        timeMap.get(year).set(month, []);
      }
      timeMap.get(year).get(month).push(post);
    }
  }
  console.log(timeMap);

  return (
    <Layout location={location}>
      <h1 className={"text-3xl font-bold my-3"}>
        Archives
      </h1>
      <hr className={"my-3"} />
      {Array.from(timeMap.keys()).map(year => {
        return (
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider text-xl font-bold">{year}</div>
            {Array.from(timeMap.get(year).keys()).map(month => (
              <div className="card bg-base-100 shadow-xl my-3">
                <div className="card-body">
                  <span className={"text-3xl font-bold text-primary"}>{month}</span>
                  {timeMap.get(year).get(month).map(post => {
                    return (
                      <Link className={"text-lg"} to={post.frontmatter.slug ? post.frontmatter.slug : post.fields.slug}>
                        <span className={"text-base-300 mr-3"}>{post.frontmatter.date}</span>
                        <span className={"text-primary-content/75"}>{post.frontmatter.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </Layout>
  );
};

export const Head = () => <Seo title="Archive" />;
export default Archive;

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
          date(formatString: "YYYY-MM-DD")
          title
          slug
        }
      }
      totalCount
    }
  }
`;
