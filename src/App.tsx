import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App