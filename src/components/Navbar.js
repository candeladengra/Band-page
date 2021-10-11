import React from 'react'
import {Button} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

    return (
        <div id= "navBar-div">
            <Button id= "logout-btn" variant="contained" disableElevation id= "navBarButton" onClick = {
              () => window.location.assign("/")
              }>
                <LogoutIcon id= "icon"/>
                LOGOUT
            </Button>
        </div>
    )
}

export default Navbar
