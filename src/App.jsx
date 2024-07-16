import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom'
import { Login } from './login.jsx'
import { Principal } from './principal.jsx'

function App() {
  
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={ <h1>Hello world</h1>}/>
          <Route path='/products' element={<Principal></Principal>}/>
          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
