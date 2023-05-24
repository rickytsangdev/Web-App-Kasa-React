// import modules
import { useState, useRef, useEffect, Fragment } from 'react'
import '../styles/Accord.css'

// import images
import arrow from '../assets/arrow-collapse.svg'

// Component
function Accord(props) {
  // state
  const [open, setOpen] = useState(false)

  // comportement
  const toggle = () => {
    setOpen(!open)
  }
  // render
  return (
    <Fragment>
      <div onClick={toggle} className="accord-visible">
        <h2>{props.label}</h2>
        <img src={arrow} alt="arrow-btn"></img>
      </div>
      {open && (
        <div className="accord-toggle">
          <p>{props.items}</p>
        </div>
      )}
    </Fragment>
  )
}

export default Accord

//   const [toggle, setToggle] = useState(false)
//   const [heightEl, setHeightEl] = useState()

//   const toggleState = () => {
//     setToggle(!toggle)
//   }
//   const refHeight = useRef()

//   useEffect(() => {
//     setHeightEl(`${refHeight.current.scrollHeight}px`)
//   }, [])

//   return (
//     <div className="accord">
//       <div onClick={toggleState} className="accord-visible">
//         <h2>{props.title}</h2>
//         <img src={arrow} alt="fleche-btn"></img>
//       </div>

//       <div
//         ref={refHeight}
//         className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
//         style={{ height: toggle ? `${heightEl}` : '0px' }}
//       >
//         <p>{props.description}</p>
//       </div>
//     </div>
//   )
