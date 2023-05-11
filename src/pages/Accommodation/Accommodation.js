import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

function Accommodation() {
  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <Header />
      <h1>Fiche-logement</h1>
    </div>
  )
}

export default Accommodation
