import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material' 
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn =useSelector(state=>state.isLoggedIn);
    const [Value, setValue] = useState();
  return (
    <AppBar position='sticky' sx={{mt:"0", background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
        <Toolbar>
            <Typography variant='h5'>CodeWall</Typography>
                {isLoggedIn && <Box display='flex'marginLeft={'auto'} marginRight={'auto'}>
                    <Tabs value={Value} textColor='inherit' onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                        <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
                        <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
                    </Tabs>
                </Box>}
                <Box display='flex' marginLeft='auto'>
                    {!isLoggedIn && <>
                    <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Login</Button>
                    <Button LinkComponent={Link} to="/auth"  variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>SignUp</Button>
                    </>
                    }
                    {isLoggedIn && <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Logout</Button>}
                </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header