import {createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import FooterLinks from './components/FooterLinks'

export const PropContext = createContext('default')

const App = () => {
  const propValue = 'Hi from App'
  return (
    <div className='container mt-5'>
      <BrowserRouter>
        <PropContext.Provider value={propValue}>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <FooterLinks />
        </PropContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
