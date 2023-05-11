import '../styles/PageNotFound.css'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <div className="bloc_error">
        <h1 className="code_error">404</h1>
        <p className="message_error_desktop">
          Oups la page que vous demandez n'existe pas.
        </p>
        <p className="message_error_mobile">
          Oups la page que
          <br /> vous demandez n'existe pas.
        </p>
      </div>
      <div className="bloc_return">
        <Link to="/" className="link_home">
          <p className="desktop">Retournez à la page d'accueil</p>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
