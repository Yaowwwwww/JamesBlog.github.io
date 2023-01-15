import * as React from "react";
import Icons from "./icons";

const Footer = () => (
  <footer className={"p-3 my-5"}>
    <div className="text-sm text-gray-500 text-center">
      <p>
        © 2020 - {new Date().getFullYear()}{` `}
        <a className={"underline"} href="https://zzhgo.com">SOTO-BLOG</a>{` `}
        Powered by{` `}
        <a className={"underline"} href="https://www.gatsbyjs.com">Gatsby</a>{` `}
        &{` `}
        <a className={"underline"} href="https://tailwindcss.com">TailwindCSS</a>
      </p>
    </div>
    <Icons/>
  </footer>
);

export default Footer;