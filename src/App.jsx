import { Routes, Route } from 'react-router-dom'
import { Context } from './context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Error from './pages/Error'

const App = () => {

  return (
    <>
      <Context.Provider value={{}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App

