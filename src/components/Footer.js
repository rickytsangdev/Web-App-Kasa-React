import logo from '../assets/logo-kasa-white.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo-kasa-white" className="logo_white" />
      <p className="footer_allRights">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
