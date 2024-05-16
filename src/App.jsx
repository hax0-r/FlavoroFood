import './App.css'
import CategoryMenu from './Components/CategoryMenu'
import Navbar from './Components/Navbar'
import Router from './Routers/Router'

function App() {

  return (
    <>
      <Navbar />
      <Router />
      <CategoryMenu />
    </>
  )
}

export default App
