import FlatList from './FlatList'
import '../styles/Card.css'

function Card({ id, cover, name }) {
  return (
    <div className="section_cards">
      <FlatList />
    </div>
  )
}

export default Card
