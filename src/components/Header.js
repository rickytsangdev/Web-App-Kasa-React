import '../styles/Header.css'
import logo from '../assets/kasa-logo.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="kasa-agency " className="kasa-logo" />
      <nav className="header_nav">
        <Link to="/" className="link_nav">
          Accueil
        </Link>
        <Link to="/AboutKasa" className="link_nav">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
