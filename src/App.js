import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutKasa from './pages/AboutKasa/AboutKasa'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Accommodation from './pages/Accommodation/Accommodation'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-kasa" element={<AboutKasa />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
