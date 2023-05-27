// import Components
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

// import modules
import '../../styles/AboutKasa.css'
import { Fragment } from 'react'
//import images
import AboutBanner from '../../assets/about-kasa-banner.jpg'

//component
function AboutKasa() {
  return (
    <Fragment>
      <Banner
        className="banner_about"
        image={AboutBanner}
        imageClassName="about_banner_img"
      />
      <section className="about_kasa">
        <div className="collapsible_bloc">
          <Collapse
            className="collapse_about"
            label="Fiabilité"
            content={
              <p style={{ fontSize: '1.2em', padding: '10px', margin: '0' }}>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            }
          />
        </div>
        <div className="collapsible_bloc">
          <Collapse
            className="collapse_about"
            label="Respect"
            content={
              <p style={{ fontSize: '1.2em', padding: '10px', margin: '0' }}>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            }
          />
        </div>
        <div className="collapsible_bloc">
          <Collapse
            className="collapse_about"
            label="Service"
            content={
              <p style={{ fontSize: '1.2em', padding: '10px', margin: '0' }}>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            }
          />
        </div>
        <div className="collapsible_bloc">
          <Collapse
            className="collapse_about"
            label="Sécurité"
            content={
              <p
                className="content_mobile"
                style={{ fontSize: '1.2em', padding: '10px', margin: '0' }}
              >
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            }
          />
        </div>
      </section>
    </Fragment>
  )
}

export default AboutKasa
