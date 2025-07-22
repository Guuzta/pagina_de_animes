import { createContext, useState } from 'react'

const AnimeContext = createContext()

const AnimeProvider = ({ children }) => {
    const [animes, setAnimes ] = useState([])

    return (
        <AnimeContext.Provider value={{animes, setAnimes}}>
            {children}
        </AnimeContext.Provider>
    )
}

export {AnimeContext, AnimeProvider}