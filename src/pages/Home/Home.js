// import Components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

//import images
import homeBanner from '../../assets/banner-home.jpg'

//Component
function Home() {
  return (
    <div>
      <Header />
      <Banner image={homeBanner} title="Chez vous partout et ailleurs" />
      <Card />
      <Footer />
    </div>
  )
}

export default Home
