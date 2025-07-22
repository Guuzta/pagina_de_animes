import { useContext } from 'react'
import { AnimeContext } from '../contexts/AnimeContext'
import Grid from '@mui/material/Grid'
import {
    Container,
    Typography
} from '@mui/material'

import AnimeCard from '../components/AnimeCard'

const AnimeList = () => {

    const { animes } = useContext(AnimeContext)

    return (
        <>
            <Container sx={{ marginTop: '50px', marginBottom: '50px' }}>

                <Typography variant='h4' sx={{ marginBottom: '30px', color: 'white', textTransform: 'uppercase' }}>
                    Resultados
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

export default AnimeList