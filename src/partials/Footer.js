import { 
    Box, 
    Container, 
    Typography 
} from '@mui/material' 


const Footer = () => {
    return (
        <Box
            component='footer'
            sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                mt: 'auto',
                py: 2,
                textAlign: 'center'
            }}
        >
            <Container maxWidth='lg'>
                <Typography>
                    © Desenvolvido por Gustavo Bodziak
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer