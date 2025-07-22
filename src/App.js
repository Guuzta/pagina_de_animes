import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { AnimeProvider } from './contexts/AnimeContext'
import Header from './partials/Header'
import Home from './pages/Home'
import AnimeList from './pages/AnimeList'
import Footer from './partials/Footer'

function App() {

  const [genre, setGenre] = useState('action')

  return (
    <AnimeProvider>
      <Router>
        <Header onSelectGenre={setGenre} />
        <Routes>
          <Route path='/' element={<Home selectedGenre={genre} />}/>
          <Route path='/results' element={<AnimeList selectedGenre={genre}/>}/>
        </Routes>
      </Router>
      <Footer />
    </AnimeProvider>
  )
}

export default App;