// import modules
import { useParams } from 'react-router-dom'
import '../../styles/Accommodation.css'

// import data
import data from '../../data/logements.json'

// import Components

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

// Component
function Accommodation() {
  const { id } = useParams()
  const accommodationData = data.find((item) => item.id === id)

  return (
    <>
      <Header />
      <section className="container_slider">
        <Slider pictures={accommodationData.pictures} />
      </section>
      <section className="container_information">
        <div className="container_location">
          <div className="bloc_location">
            <h2 className="accommodation_title">{accommodationData.title}</h2>
            <p className="accommodation_city">{accommodationData.location}</p>
          </div>
          <Tags tags={accommodationData.tags} />
        </div>
        <div className="container_rating_host">
          <Rating stars={accommodationData.rating} />
          <div className="bloc_host">
            <p className="accommodation_host">{accommodationData.host.name}</p>
            <img
              className="host_img"
              src={accommodationData.host.picture}
              alt="portrait du host"
            ></img>
          </div>
        </div>
      </section>

      <section className="container_collapsible">
        <div className="collapsible_item">
          <Collapse
            key={1}
            className="collapse_visible_btn_acco collapse_about"
            label="Description"
            content={accommodationData.description}
          />
        </div>
        <div className="collapsible_item">
          <Collapse
            key={2}
            className="collapse_visible_btn_acco collapse_about"
            label="Equipements"
            content={accommodationData.equipments.map((equipment, index) => (
              <li key={index} className="equipments_list">
                {equipment}
              </li>
            ))}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Accommodation
