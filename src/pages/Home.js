import { useState, useEffect } from "react"
import axios from 'axios'

import Grid from '@mui/material/Grid'
import {
    Container,
    Typography,
    Stack,
    CircularProgress,
    Box
} from '@mui/material'

import AnimeCard from '../components/AnimeCard'



const Home = ({ selectedGenre }) => {

    const [animes, setAnimes] = useState([])
    const [isLoading, setIsLoading] = useState()

    const config = {
        headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        }
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${selectedGenre}&page[limit]=20`, config)
            .then(response => {
                const { data } = response.data
                setAnimes(data)
                console.log(data)
                setIsLoading(false)
            })
    }, [selectedGenre])

    return (
        <>
            {isLoading ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh'
                }}>
                    <Stack spacing={2} direction="row" alignItems="center" flexGrow={1} >
                        <CircularProgress size="3rem" />
                    </Stack>
                </Box>
            ) : (
                <Container sx={{ marginTop: '50px', marginBottom: '50px' }}>

                    <Typography variant='h4' sx={{ marginBottom: '30px', color: 'white', textTransform: 'uppercase' }}>
                        {selectedGenre}
                    </Typography>

                    <Grid container spacing={3}>
                        {
                            animes.map(anime => (
                                <Grid size={{ xs: 12, sm: 3, lg: 2, xl: 4 }} key={anime.id}>
                                    <AnimeCard
                                        title={anime.attributes.canonicalTitle}
                                        synopsis={anime.attributes.synopsis}
                                        posterImage={anime.attributes.posterImage.small}
                                        coverImage={anime.attributes.coverImage.small}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            )}
        </>
    )
}

export default Home