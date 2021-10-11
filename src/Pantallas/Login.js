import React, { useState } from 'react'
import {InputLabel, Input, InputAdornment, Button} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState ('')
    const [isError, setIsError] = useState (true)

    const saveUser = (event) => {
        setUser(event.target.value)
    }

    const savePass = (event) => {
        setPass (event.target.value)
    }
    
    const setUserInLocalStorage = () => {
        localStorage.setItem('User', user)
            if (user==='Admin' && pass ==='Admin1234') {
                window.location.assign('/bands')
                setIsError (true);
            }
            else {
                setIsError (false);
                setPass('')
                setUser('')
            }
    
    }


    return (
        <div id="login">
            <div id="form-login-div">
                <div>
                    <InputLabel>
                        Username
                    </InputLabel>
                    <Input onChange={saveUser} value={user} id="input-with-icon-adornment" autoComplete="new-username"
                    startAdornment={
                    <InputAdornment position="start">
                    <AccountCircleIcon/>
                    </InputAdornment>}/>
                    <InputLabel>
                        Password
                    </InputLabel>
                    <Input onChange={savePass} type="password" autoComplete="new-password" id="input-with-icon-adornment" value={pass}
                    startAdornment={
                    <InputAdornment position="start">
                    <LockIcon/>
                    </InputAdornment>}/>
                </div>
                <p id= "error-message" style = {{visibility: isError ? 'hidden': 'visible' }}> User or Password incorrect! </p>
                <div>
                    <Button id= "login-btn"variant="contained" onClick = {setUserInLocalStorage}> <LoginIcon id= "icon"/> LOGIN</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
