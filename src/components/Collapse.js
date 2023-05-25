// import modules
import '../styles/Collapse.css'
import { useState, useRef, Fragment } from 'react'

// import images
import arrow from '../assets/arrow-collapse.svg'

//component
function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const parentRef = useRef()
  if (parentRef.current) console.log(parentRef.current.scrollHeight)
  return (
    <Fragment>
      <div className={props.className} onClick={toggle}>
        <p className="visible_title">{props.label}</p>
        <img className="arrow_btn" src={arrow} alt="arrow-bouton-collapse" />
      </div>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + 'px',
              }
            : {
                height: '0px',
              }
        }
      >
        <div className="content">
          <p>{props.content}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Collapse
