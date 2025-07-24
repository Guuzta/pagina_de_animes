import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'

const AnimeCardInfo = ({ title,coverImage, synopsis }) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} size="small" variant='contained' >Saiba mais</Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent sx={{backgroundColor: '#1f2427ff'}}>
          <Card sx={{ maxWidth: '100%', backgroundColor: '#1f2427ff', boxShadow: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coverImage}
                alt={title}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {synopsis}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        <DialogActions sx={{backgroundColor: '#1f2427ff'}}>
          <Button onClick={handleClose} autoFocus sx={{backgroundColor: '#1f2427ff'}}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AnimeCardInfo