import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ title }) => (
  <div className={"flex flex-row p-4 lg:w-3/4 mx-auto justify-between"}>
    <Link className={"flex flex-row space-x-3"} to={"/"}>
      <StaticImage
        className={"object-contain rounded-md"}
        src={"../images/profile-icon.png"}
        alt={"favicon"}
        weight={32}
        height={32}
      ></StaticImage>
      <div>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>
      </div>
    </Link>
    <div className={"flex flex-row space-x-3"}>
      <Link to={"/archives"}>Archives</Link>
      <Link to={"/tags"}>Tags</Link>
    </div>
  </div>

);

export default Header;