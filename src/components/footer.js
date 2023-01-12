import * as React from "react";

const Footer = () => (
  <footer className={"p-4"}>
    <h1 className="text-sm text-gray-500 text-center">
      © 2020 - {new Date().getFullYear()}
      {" "}
      <a className={"underline"} href="https://zzhgo.com">SOTO-BLOG</a>
      {" "}
      Powered by
      {" "}
      <a className={"underline"} href="https://www.gatsbyjs.com">Gatsby</a>
    </h1>
  </footer>
);

export default Footer;