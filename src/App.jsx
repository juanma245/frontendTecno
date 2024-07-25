import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { Login } from './login.jsx'
import { Principal } from './principal.jsx'
import { User } from './user.jsx'
import { Register } from './register.jsx'

function App() {


  
  return (
    <>

     <Router>
        <Routes>
          <Route path='/' element={<Principal></Principal>}/>
          <Route path="/login" element={<Login></Login>} />
          <Route path='/user' element={<User></User>}/>
          <Route path='/singin' element = {<Register></Register>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
