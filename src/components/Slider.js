// import modules
import { useState } from 'react'
import '../styles/Slider.css'

// import images
import arrowLeft from '../assets/arrow-left-carrousel.svg'
import arrowRight from '../assets/arrow-right-carrousel.svg'

// Component
function Slider({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${pictures[currentSlide]})`,
  }

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? pictures.length - 1 : currentSlide - 1)
  }

  const goToNext = () => {
    setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="slider_bloc">
      <div className="left-arrow" onClick={goToPrevious}>
        {pictures.length > 1 && (
          <div>
            <img
              className="fleche-img"
              src={arrowLeft}
              alt="flèche-directionnelle-précédent"
            ></img>
          </div>
        )}
      </div>
      <div className="right-arrow" onClick={goToNext}>
        {pictures.length > 1 && (
          <img
            className="fleche-img"
            src={arrowRight}
            alt="flèche-directionnelle-suivant"
          ></img>
        )}
      </div>
      <div className="img-number">
        <p>
          {currentSlide + 1}/{pictures.length}
        </p>
      </div>
      <div className="slider-image" style={slideStyles}></div>
    </div>
  )
}

export default Slider
