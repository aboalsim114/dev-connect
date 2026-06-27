import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home     from './pages/Home/Home'
import Login from './pages/Login'
import Register from './pages/Register/Register'
import Navbar   from './components/Navbar/Navbar'
import UserDashboard from './pages/UserDashboard/UserDashboard'

function WithNav({ children }) {
  return <><Navbar />{children}</>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<WithNav><Home /></WithNav>} />
        <Route path="/connexion" element={<Login />}    />
        <Route path="/rejoindre" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
