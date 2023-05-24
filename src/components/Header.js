// import modules
import '../styles/Header.css'
import { Link } from 'react-router-dom'

// import images
import logo from '../assets/kasa-logo.svg'

// Component
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="kasa-agency " className="kasa-logo" />
      <nav className="header_nav">
        <Link to="/" className="link_nav">
          Accueil
        </Link>
        <Link to="/about-kasa" className="link_nav">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
