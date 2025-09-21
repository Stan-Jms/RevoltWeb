import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomePage from '@/features/home/HomePage'
import FeaturesPage from '@/features/features/FeaturesPage'
import BecomeChargerPage from '@/features/pricing/BecomeChargerPage'
import AboutPage from '@/features/about/AboutPage'
import ContactPage from '@/features/contact/ContactPage'
import { Toaster } from '@/components/ui/Toaster'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/become-charger" element={<BecomeChargerPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App
