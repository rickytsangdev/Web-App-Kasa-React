//import data
import FlatList from './FlatList'

//import modules
import '../styles/Card.css'

// Component
function Card({ id, cover, name }) {
  return (
    <div className="cards">
      <FlatList id={id} cover={cover} name={name} />
    </div>
  )
}

export default Card
