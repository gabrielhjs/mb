import React from "react"

import Header from "../Header"
import "../../Sass/global_styles.scss"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
