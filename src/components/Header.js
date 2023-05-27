// import modules
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// import images
import logo from '../assets/kasa-logo.svg'

// Component
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="kasa-agency " className="kasa-logo" />
      </Link>
      <nav className="header_nav">
        <NavLink to="/" activeclassname="current">
          Accueil
        </NavLink>
        <NavLink to="/about-kasa" exact="true" activeclassname="current">
          A propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header

/* <Link to="/" className="link_nav">
          Accueil
        </Link> */
