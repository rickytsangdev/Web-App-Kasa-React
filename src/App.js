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
