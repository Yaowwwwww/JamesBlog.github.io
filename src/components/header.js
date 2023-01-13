import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ThemeToggle from "./themeToggle";

const Header = () => (
  <div className="navbar p-4 lg:w-3/4 mx-auto bg-base-100">
    <div className="flex-1 space-x-3">
      <Link className="btn btn-ghost normal-case space-x-3" to={"/"}>
        <StaticImage
          className={"rounded-md"}
          src={"../images/profile-icon.png"}
          alt={"favicon"}
          weight={36}
          height={36}
        ></StaticImage>
        <h1 className="text-2xl font-bold">SOTO</h1>
      </Link>
      <ThemeToggle />
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to={"/archives"}>Archives</Link>
        </li>
        <li>
          <Link to={"/tags"}>Tags</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;