import React from "react"
import { Link } from "gatsby"

import Style from "./index.module.scss"

const Header = () => {
  return (
    <header className={Style.header}>
      <nav className={Style.menu}>
        <div>
          <Link to="/">Início</Link>
        </div>
        <div>
          <Link to="/cardapio">Cardápio</Link>
        </div>
        <div>
          <Link to="/mapa">Mapa</Link>
        </div>
        <div>
          <Link to="/sobre">Sobre nós</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
