import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'
import RedbackAdvantage from './pages/RedbackAdvantage'
import Search from './pages/Search'
import Suppliers from './pages/Suppliers'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/products' element={ <Products />} />
        <Route path='/redback-advantage' element={ <RedbackAdvantage />} />
        <Route path='/suppliers' element={ <Suppliers />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/search/:text' element={ <Search/>} />
        <Route path='/admin' element={ <Admin/>} />
      </Routes>      
    </>
  )
}

export default App
