// import modules
import '../styles/Rating.css'

// import images
import redStar from '../assets/red-star.svg'
import greyStar from '../assets/grey-star.svg'

// Component
function Rating({ stars }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="bloc_stars">
      {range.map((rangeStar) =>
        stars >= rangeStar ? (
          <span key={range.toString()}>
            <img className="red_star" src={redStar} alt="étoile-pleine"></img>
          </span>
        ) : (
          <img className="grey_star" src={greyStar} alt="étoile-vide"></img>
        )
      )}
    </div>
  )
}

export default Rating
