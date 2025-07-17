import { useState, useEffect } from "react"
import axios from 'axios'

import Grid from '@mui/material/Grid'
import {
    Container,
} from '@mui/material'

import AnimeCard from '../components/AnimeCard'



const Home = () => {

    const [animes, setAnimes] = useState([])

    const config = {
        headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        }
    }

    useEffect(() => {
        axios.get('https://kitsu.io/api/edge/anime?filter[categories]=action&page[limit]=20', config)
            .then(response => {
                const { data } = response.data
                setAnimes(data)
                console.log(data)
            })
    }, [])

    return (
        <>
            <Container sx={{ marginTop: '50px', marginBottom: '50px'}}>
                <Grid container spacing={3}>
                    {
                        animes.map(anime => (
                            <Grid size={{ xs: 12, sm: 4, lg: 2, xl: 2 }}>
                                <AnimeCard
                                    title={anime.attributes.canonicalTitle}
                                    synopsis={anime.attributes.synopsis}
                                    posterImage={anime.attributes.posterImage.small}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Home