// import modules
import { Fragment, useState } from 'react'
import '../styles/Collapsible.css'

// import images
import arrow from '../assets/arrow-collapse.svg'

// Component
function Collapsible(props) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <div className="collapsible_visible" onClick={toggle}>
        <p className="visible_title">{props.label}</p>
        <img className="arrow_btn" src={arrow} alt="arrow-bouton-collapse" />
      </div>
      {open && <div className="collapsible_toggle">{props.items}</div>}
    </Fragment>
  )
}

export default Collapsible
