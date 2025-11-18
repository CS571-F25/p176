import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import SiteNavbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Mission from './pages/Mission'
import Technology from './pages/Technology'
import Vision from './pages/Vision'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="appRoot">
      <SiteNavbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
