// import Components
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import '../../styles/Banner.css'

//import images
import homeBanner from '../../assets/banner-home.jpg'

//Component
function Home() {
  return (
    <div>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  )
}

export default Home
