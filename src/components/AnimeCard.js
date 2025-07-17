import {
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material'


const AnimeCard = ({ title, posterImage }) => {
    return (
        <Card sx={{ height: '100%',  backgroundColor: '#1f2427ff'}}>
            <CardMedia
                component="img"
                image={posterImage}
                alt={title}
            />

           
            <CardContent sx={{ backgroundColor: '#1f2427ff'}}>
                <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                    {title}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default AnimeCard