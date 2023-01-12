import * as React from "react"
import Header from "./header";
import Footer from "./footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-gray-100" data-is-root-path={isRootPath}>
      <Header title={title}/>
      <main className={"w-11/12 lg:w-1/2 mx-auto"}>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
