import { useState } from 'react'

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material'

import AnimeCardInfo from './AnimeCardInfo';

const AnimeCard = ({ title, posterImage, synopsis, coverImage }) => {

    return (
        <Card
            sx={{ height: '100%', backgroundColor: '#1f2427ff', display: 'flex', flexDirection: 'column' }}
        >

            <CardMedia
                component="img"
                image={posterImage}
                alt={title}
            />



            <CardContent sx={{ backgroundColor: '#1f2427ff', flexGrow: 1 }}>
                <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </CardContent>

            <AnimeCardInfo
                title={title}
                synopsis={synopsis}
                coverImage={coverImage}
            />

        </Card>
    );
}

export default AnimeCard