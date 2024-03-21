import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Project Recipe/Home.jsx'
import Navbar from './Project Recipe/Navbar.jsx'
import SpecificCat from './Project Recipe/SpecificCat.jsx'
import Meals from './Project Recipe/Meals.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/specificCat' element={<SpecificCat></SpecificCat>}></Route>
          <Route path='/meals' element={<Meals></Meals>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
