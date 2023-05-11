import '../styles/Banner.css'

function Banner(props) {
  return (
    <div className="Banner">
      <div className="banner_bloc">
        <img className="banner_img" src={props.image} alt="mountain-view" />
        <h1 className="banner_title">Chez vous partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
