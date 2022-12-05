import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to={"/"}>MySite</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to={"/"}>Main</Link>
        <Link className="nav-link" to={"/page1"}>page1</Link>
        <Link className="nav-link" to={"/page2"}>Page2</Link>
      </div>
    </div>
  </div>
</nav>  )
}

export default Header