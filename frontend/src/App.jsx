import {BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Add from './pages/Add'
import Login from './pages/Login'
import SingleRecipe from './pages/SingleRecipe'
import Signup from './pages/Signup'
import '../index.css'

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/add" element={<Add />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/recipes/singleRecipe" element={<SingleRecipe />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App
