// import modules
import { Link } from 'react-router-dom'
import '../styles/FlatList.css'

// import data
import accommodationList from '../data/logements.json'

// Component
function FlatList() {
  return (
    <div className="display_bloc">
      <ul className="display_accommodation">
        {accommodationList.map((accommodation) => (
          <Link
            key={accommodation.id}
            to={`accommodation/${accommodation.id}`}
            className="container_li"
          >
            <li className="liste_img_logements">
              <img
                className="image_cover"
                src={accommodation.cover}
                alt="photos-des-logements"
              />
            </li>
            <div className="bloc_title">
              <h2 className="title_logements">{accommodation.title}</h2>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default FlatList
