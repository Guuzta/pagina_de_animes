import { useState, useEffect } from "react"
import axios from 'axios'

import Grid from '@mui/material/Grid'
import {
    Container,
    Typography
} from '@mui/material'

import AnimeCard from '../components/AnimeCard'



const Home = ({ selectedGenre }) => {

    const [animes, setAnimes] = useState([])

    const config = {
        headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        }
    }

    useEffect(() => {
        axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${selectedGenre}&page[limit]=20`, config)
            .then(response => {
                const { data } = response.data
                setAnimes(data)
            })
    }, [selectedGenre])

    return (
        <>
            <Container sx={{ marginTop: '50px', marginBottom: '50px'}}>

                <Typography variant='h4' sx={{ marginBottom: '30px' , color: 'white', textTransform: 'uppercase'}}>
                    {selectedGenre}
                </Typography>

                <Grid container spacing={3}>
                    {
                        animes.map(anime => (
                            <Grid size={{ xs: 12, sm: 4, lg: 2, xl: 2 }} key={anime.id}>
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