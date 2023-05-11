import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import homeBanner from '../../assets/banner-home.jpg'

function Home() {
  return (
    <div>
      <Header />
      <Banner image={homeBanner} />
      <Card />
      <Footer />
    </div>
  )
}

export default Home
