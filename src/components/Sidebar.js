import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'

import axios from 'axios'


const SideBar = ({ onSelectGenre }) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const [genres, setGenres] = useState([])

  const config = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  }

  useEffect(() => {
    axios.get('https://kitsu.io/api/edge/genres?filter&page[limit]=20', config)
      .then(response => {
        const { data } = response.data
        setGenres(data)
      })
  },[])

  const navigate = useNavigate()

  function redirect (genre) {
      onSelectGenre(genre)
      navigate('/')
  }

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: '#1f2427ff', color: 'white' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre} disablePadding>
            <ListItemButton sx={{ paddingLeft: '25px' }} onClick={() => redirect(genre.attributes.slug)}>
              <ListItemText primary={genre.attributes.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default SideBar