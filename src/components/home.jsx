import React from 'react'
import { CheckCont, Homecont, SearchDiv, SerachCont, World } from './homeStyle'
import Navbar from './navbar'
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField, } from '@mui/material';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

const Home = () => {
  return (
    
    <div>
        <Homecont>
            <Navbar/>
            <World>
                <h1>
                    The whole world awaits
                </h1>
            </World>
            <SerachCont>
              <div style={{display:"flex", flexDirection:"row"}}>
              <SearchIcon />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" 
            />
              </div>
              <CheckCont>
                <CalendarMonthSharpIcon/>
                <p>Check in</p>
              </CheckCont>
              <CheckCont>
                <CalendarMonthSharpIcon/>
                <p>Check out</p>
              </CheckCont>
              <CheckCont>
                <PersonSharpIcon/>
                <p>room</p>
                <p>adults</p>
              </CheckCont>
              <>
                <SearchDiv>
                  <Button>Serach</Button>
                </SearchDiv>
              </>
            </SerachCont>
        </Homecont>
    </div>
  )
}

export default Home