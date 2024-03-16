import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'


// pages and components
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Add from './pages/Add'
import Login from './pages/Login'
import SingleRecipe from './pages/SingleRecipe'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import '../index.css'

function App() {
  const {user} = useAuthContext()
  return (
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/add" element={<Add />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
              <Route path="/recipes/:id" element={<SingleRecipe />} />
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App
