import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import { Link } from "gatsby"
import Code from "./code"
import { StaticImage } from "gatsby-plugin-image"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>
        <MDXProvider components={components}>
          <div style={{ margin: "0 auto" }}>{children}</div>
        </MDXProvider>
      </main>
      <footer>
        <StaticImage
          className="bio-avatar"
          // layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/gatsby-icon.png"
          width={50}
          height={50}
          quality={95}
          alt="Robert Hogan Logo"
        />
        © {new Date().getFullYear()}, Built with &nbsp;
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
