import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/ProductsPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DetailProduct from './components/DetailProduct'
import Contacto from './pages/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<DetailProduct />} />
          <Route path='/contact' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
