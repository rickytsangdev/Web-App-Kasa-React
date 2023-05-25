//import modules
import '../styles/Banner.css'

// Component
function Banner(props) {
  return (
    <div className={props.className}>
      <div className="banner_bloc">
        <img className="banner_img" src={props.image} alt="mountain-view" />
        <h1 className="banner_title">{props.title}</h1>
      </div>
    </div>
  )
}

export default Banner
