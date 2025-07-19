import { useState } from 'react'
import Header from './partials/Header'
import Home from './pages/Home'
import Footer from './partials/Footer'

function App() {

  const [genre, setGenre] = useState('action')

  return (
    <>
      <Header onSelectGenre={setGenre}/>
      <Home selectedGenre={genre} />
      <Footer/>
    </>
  )
}

export default App;