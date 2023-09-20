import { Button, Box, Divider } from '@mui/material';

export const NavButtons = () => {
    return (
        <Box>
            <Divider sx={{ marginBottom: '8px' }} />
            <Button sx={{ color: 'black', marginLeft: '240px' }}>Home</Button>
            <Button sx={{ color: 'black' }}>Today's Deals</Button>
            <Button sx={{ color: 'black' }}>Trending Products</Button>
            <Button sx={{ color: 'black' }}>Blog</Button>
            <Button sx={{ color: 'blue' }}>Special Offers</Button>
        </Box>
    );
};
