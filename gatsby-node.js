/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`);

/**
 * @type {import("gatsby").GatsbyNode["createPages"]}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
        }
      });
    });
  }

  const tagPosts = path.resolve(`./src/templates/tag-posts.js`);
  const tagPostResult = await graphql(
    `
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
    `
  );

  // Create tag pages.
  if (tagPostResult.errors) {
    throw tagPostResult.errors;
  }

  // Create blog posts pages.
  const nodes = tagPostResult.data.allMarkdownRemark.nodes;

  const tagSet = new Set();

  nodes.forEach(node => {
    if (node.frontmatter.tags !== null) {
      node.frontmatter.tags.forEach(tag => tagSet.add(tag));
    }
  });


  tagSet.forEach(tag => createPage({
    path: "tags/" + tag,
    component: tagPosts,
    context: {
      targetTag: tag
    }
  }));
};

/**
 * @type {import("gatsby").GatsbyNode["onCreateNode"]}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

/**
 * @type {import("gatsby").GatsbyNode["createSchemaCustomization"]}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      image: String
      tags: [String]
    }

    type Fields {
      slug: String
    }
  `);
};
