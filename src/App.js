// import routes
import { Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home/Home'
import AboutKasa from './pages/AboutKasa/AboutKasa'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Accommodation from './pages/Accommodation/Accommodation'

// import Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-kasa" element={<AboutKasa />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/redirect" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </>
    </div>
  )
}

export default App

//derniere maj
// 1/ vérification de l'id à faire
// 2/ Utiliser le Header et le footer au niveau du routage
// 3/ Modification du sens de la flèche dans le composant collapse
// 4/  Utiliser des classes actives dans la navigation de accueil et à propos
// 5/ lien sur le logo
