import React, {useEffect, useState} from 'react'
import MaterialTable from 'material-table';
import axios from 'axios';
import {Button, Modal, Typography, Box} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BandTable = () => {

    const [list, setList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBand, setSelectedBand] = useState({});
    const [albums, setAlbums] = useState({});
    
    const handleModalOpen = (row) => {
        setSelectedBand(row)
        setIsModalOpen(true)
        getBandAlbums(selectedBand?.id)
    }

    const handleHideClick = () => {
        setIsModalOpen(false)
        setAlbums([])
    }

    useEffect(() => {
        const getDataFromAPI=async() => {
    
            try {
                
                const response = await axios ({
                    url: 'https://my-json-server.typicode.com/improvein/dev-challenge/bands',
                });
                setList(response.data);
            
            }catch(error){
                console.log(error)
                }}

            getDataFromAPI()
            }, []);


    const getBandAlbums=async(bandID) => {
        try {
            
            const response = await axios ({
                url: `https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=${bandID}`,
            });
            setAlbums(response.data);
        
        }catch(error){
            console.log(error)
            }}

    const style = {
        boxShadow: 24,
        p: 4,
        };

    return (
        <div>  
            <MaterialTable id = "table"
            title= ''
            columns={[
                  {
                  title: 'Name of the band', 
                  field: 'name'},
                  
                  {title: 'GenreCode',
                  field: 'genreCode',
                  cellStyle: ''
                  },
                  {title: 'Country',
                  field: 'country',
                  },
                  {title: 'Year',
                  field: 'year',
                  },
              ]}
              data={list}
              options={{
                headerStyle: {
                  backgroundColor: '#1976d2',
                  color: 'white',
                  fontSize: '24px',
                  textAlign: "center",
                  },
                rowStyle: {
                    fontSize: '22px',
                    paddingLeft: '16px'
                  }
            }}
              style = {{marginTop: 24}}
              onRowClick = {(e, rowData) => { handleModalOpen(rowData)}}
            />

            <Modal open={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" id= "modal-box"> 
                <Box sx={style} id="box">
                    <div id= "modal-wrapper">
                        <div id= "modalbox"> 
                            <div>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {selectedBand?.name} 
                                </Typography>
                                <ul>
                                    <li className="band-data">Members: {selectedBand?.members?.map(member => 
                                        <ol> {member.name} </ol>
                                        )
                                    }
                                    </li>
                                    
                                    <li className="band-data">Albums:  
                                        {albums.length > 0 ? albums.map(album => 
                                        <ol> {album.name} </ol>) : " No albums to show"}
                                    </li>
                                </ul>
                            </div>
                            <div id= "hide-btn-div">       
                                <Button id= "hide-modal-btn" variant="contained" onClick= {handleHideClick}>
                                <KeyboardArrowDownIcon/>HIDE
                                </Button>
                            </div>
                        </div>
                        <div id= "img-modal">
                            <img src= "https://www.pngkey.com/png/full/2-22293_guitar-clipart-black-and-white-guitar-png-clip.png" alt=''></img>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default BandTable