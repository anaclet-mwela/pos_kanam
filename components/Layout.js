import React from 'react'
import Navbar from './navbar'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Page = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 20px;
`


const Layout = ({children}) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        KANAM
                    </Typography>
                    <Button color="inherit">Connexion</Button>
                </Toolbar>
            </AppBar>
            <Page >
                <Navbar />
                <main>{children}</main>
            </Page>
        </div>
    )
}

export default Layout
