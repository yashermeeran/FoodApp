import './App.css'
import Navbar from './Components/Navbar'
import Home from './Screen/Home'
import About from './Screen/About'
import Menu from './Screen/Menu'
import Contact from './Screen/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
