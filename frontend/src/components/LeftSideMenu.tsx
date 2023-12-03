import {
    Box,
    Typography,
    Menu,
    MenuItem,
} from '@mui/material';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


export const LeftSideMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    const handleClick = (e: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(e.currentTarget);
    return (
        <Box
            sx={{
                backgroundColor: '#f44336',
                width: '300px',
                display: 'inline-flex',
                alignItems: 'center',
                height: '55px',
            }}
        >
            <IconButton onClick={handleClick} sx={{ color: 'white' }}>
                <MenuIcon />
            </IconButton>
            <Typography color={'white'}>Browse Categories</Typography>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                id="test-menu"
                variant="selectedMenu"
            >
                <MenuItem onClick={handleClose}>First section</MenuItem>
                <MenuItem onClick={handleClose}>Second section</MenuItem>
                <MenuItem onClick={handleClose}>Third section</MenuItem>
            </Menu>
        </Box>
    );
};
