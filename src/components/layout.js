import * as React from "react"
import Header from "./header";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-gray-100" data-is-root-path={isRootPath}>
      <Header title={title}/>
      <main className={"w-11/12 lg:w-1/2 mx-auto"}>{children}</main>
      <footer>
        © 2020 - {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
