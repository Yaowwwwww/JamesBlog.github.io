import React from "react";
import JSONData from "../../content/db/tofu.json";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { Link } from "gatsby";


export const Head = () => (
  <Seo
    title="Library"
    children={<meta name="referrer" content="no-referrer" />}
  />
);

const Library = ({ location }) => {
  const nodes = JSONData.interest.reverse().slice(0, 99);
  return (
    <Layout location={location}>
      <div className="divider"></div>
      <ol className="w-full grid grid-cols-2 gap-5 mt-10">
        {nodes.map((node, index) => {
          if (node.status === "done") {
            const type = node.type;
            const title = node.interest.subject.title;
            const stars = node.interest.rating ? "★".repeat(node.interest.rating.value) : null;
            const date = node.interest.create_time.split(" ")[0];
            const cover = node.interest.subject.cover_url;
            const url = node.interest.sharing_url;
            return <li key={`content_item_${index}`}>
              <div className="bg-base-100 rounded-xl shadow-xl h-48 overflow-scroll hover:bg-base-content/5">
                <Link className={"grid grid-cols-2"} to={url}>
                  <div className="p-5">
                    <h2 className="text-xl font-bold">
                      {title}
                    </h2>
                    <h3>
                      <div className="badge badge-primary">{type}</div>
                    </h3>
                    <h3 className="text-yellow-300">
                      {stars}
                    </h3>
                    <h3 className="text-base-content/50">
                      {date}
                    </h3>
                    <p className="text-base-content/75">
                      {node.interest.comment}
                    </p>
                  </div>
                  <figure><img className="object-cover" src={cover} alt="" /></figure>
                </Link>
              </div>
            </li>;
          }
        })}
      </ol>
    </Layout>
  );
};
export default Library;