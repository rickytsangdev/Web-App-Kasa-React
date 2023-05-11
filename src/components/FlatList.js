import accommodationList from '../data/logements.json'
import '../styles/FlatList.css'
import { Link } from 'react-router-dom'

function FlatList({ title, cover }) {
  return (
    <div>
      <ul className="display_accommodation">
        <li className="section_logements">
          <div className="background"></div>
          {accommodationList.map((accommodation) => (
            <div className="cards_bloc">
              <Link
                to={`/accommodation/${accommodation.id}`}
                className="link_oneAccommodation"
              >
                <div className="cards" key={accommodation.id}>
                  <img className="img_cards" src={accommodation.cover} alt="" />
                  <div className="title_img">
                    <div className="title">{accommodation.title}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default FlatList
