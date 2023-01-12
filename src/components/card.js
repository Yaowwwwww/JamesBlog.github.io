import { Link } from "gatsby";
import * as React from "react";

const Card = (post) => (
  <Link to={post.fields.slug} itemProp="url">
    <article className={"flex flex-col relative p-6 bg-white rounded-xl shadow-lg"} itemScope
             itemType="https://schema.org/Article">
      <div>
        <img src={post.frontmatter.image} className={"rounded-xl"} alt={""} />
      </div>
      <div className={""}>
        <header className={"my-3 font-sans text-2xl font-bold"}>
          <h1>
            <span itemProp="headline">{post.frontmatter.title || post.fields.slug}</span>
          </h1>
        </header>
        <section className={"text-gray-500"}>
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