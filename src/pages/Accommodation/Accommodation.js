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
  console.log(id)
  const accommodationData = data.find((item) => item.id === id)
  console.log(accommodationData)

  return (
    <>
      <Header />
      <section className="container_slider">
        <Slider pictures={accommodationData.pictures} />
      </section>
      <section className="container_information">
        <div className="bloc_location">
          <h2 className="accommodation_title">{accommodationData.title}</h2>
          <p className="accommodation_city">{accommodationData.location}</p>
        </div>
        <div className="bloc_host">
          <p className="accommodation_host">{accommodationData.host.name}</p>
          <img
            className="host_img"
            src={accommodationData.host.picture}
            alt="portrait du host"
          ></img>
        </div>
      </section>
      <section className="container_rating">
        <Tags tags={accommodationData.tags} />
        <Rating stars={accommodationData.rating} />
      </section>
      <section className="container_collapsible">
        <div className="collapsible_item">
          <Collapse
            className="collapse_visible_btn_acco collapse_about"
            label="Description"
            content={accommodationData.description}
          />
        </div>
        <div className="collapsible_item">
          <Collapse
            className="collapse_visible_btn_acco collapse_about"
            label="Equipements"
            content={accommodationData.equipments.map((equipment) => (
              <li className="equipments_list">{equipment}</li>
            ))}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Accommodation

/* <div className="bloc_collapse">
          <Collapsible
            label="Description"
            items={accommodationData.description}
          />
        </div>
        <div className="bloc_collapse">
          <Collapsible
            label="Equipements"
            items={accommodationData.equipments.map((equipment) => (
              <li className="equipments_list">{equipment}</li>
            ))}
          />
        </div> */
