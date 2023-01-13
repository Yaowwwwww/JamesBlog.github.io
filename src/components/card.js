import { Link } from "gatsby";
import * as React from "react";

const Card = (post) => (
  <Link to={post.frontmatter.slug ? "/" + post.frontmatter.slug : post.fields.slug} itemProp="url">
    <article className={"card card-compact bg-base-100 shadow-lg hover:bg-base-200 hover:p-1"} itemScope
             itemType="https://schema.org/Article">
      <figure>
        <img src={post.frontmatter.image} className={""} alt={""} />
      </figure>
      <div className={"card-body"}>
        <h2 className={"card-title"} itemProp="card-title">{post.frontmatter.title || post.fields.slug}</h2>
        <section className={"text-zinc-500"}>
          <p className={"truncate..."}
             dangerouslySetInnerHTML={{
               __html: post.frontmatter.description || post.excerpt
             }}
             itemProp="description"
          />
          <small>{post.frontmatter.date}</small>
        </section>
      </div>
    </article>
  </Link>
);

export default Card;