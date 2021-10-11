import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import BandTable from '../components/BandTable'


const MainPage = () => {

useEffect(() => {
    const user = localStorage.getItem('User');   
    if (user === "Admin") {
        return 
    }
    else {
        window.location.assign("/")
    }
}, [])

return (
        <div>
            <Navbar/>
            <BandTable/>
        </div>

    )
}

export default MainPage
