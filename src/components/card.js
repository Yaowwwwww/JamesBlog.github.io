import { Link } from "gatsby";
import * as React from "react";

const Card = (post) => (
  <Link to={post.frontmatter.slug ? "/" + post.frontmatter.slug : post.fields.slug} itemProp="url">
    <article className={"container rounded-3xl overflow-hidden bg-base-100 shadow-lg hover:contrast-75"}
             itemScope
             itemType="https://schema.org/Article">
      <img src={post.frontmatter.image} className={""} alt={""} />
      <div className={"p-5"}>
        <h2 className={"text-xl font-bold"}>
          {post.frontmatter.title || post.fields.slug}
        </h2>
        <section className={"text-base-content/75"}>
          <p className={"truncate..."}
             dangerouslySetInnerHTML={{
               __html: post.frontmatter.description || post.excerpt
             }}
             itemProp="description"
          />
        </section>
        <p className={"flex flex-row mt-3 space-x-3"}>
          <span className={"text-sm text-base-content/80"}>
            {post.frontmatter.date}
          </span>
          {post.frontmatter.tags ? (
            post.frontmatter.tags.map(tag => (
              <div
                className={"text-sm text-base-content/80 bg-base-content/10 rounded-md px-3"}>
                {tag}
              </div>
            ))
          ) : null}
        </p>
      </div>
    </article>
  </Link>
);

export default Card;