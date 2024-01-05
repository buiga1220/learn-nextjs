// components/layout/Navbar.tsx
// @react-client
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Paper} from "@mui/material";
import {Box} from "@mui/system";

export default function Navbar() {
    return (
        <header className="header">
            <Paper sx={{display: {xs: 'none', md: 'block'}}}>
                <div className="header-panel flex">
                    <a className="logo" href={'/'} title="Logo Title">BUIGA</a>
                    <div>Category 1</div>
                    <div>Category 1</div>
                    <div>Category 1</div>
                    <div>Category 1</div>
                </div>
            </Paper>

            <Paper sx={{display: {xs: 'block', md: 'None'}}}>
                <div className="header-panel">
                    <div>Mobile Logo</div>
                    <div>menu Mobile 1</div>
                </div>

            </Paper>

        </header>
    );
};

