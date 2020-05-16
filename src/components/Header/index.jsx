import React from "react"
import { Link } from "gatsby"

import "./styles.scss"

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <div>
          <Link to="/">Início</Link>
        </div>
        <div>
          <Link to="/">Galeria</Link>
        </div>
        <div>
          <Link to="/">Sobre</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
