import { Box } from '@mui/material';
import { Advantages } from '../components/Advantages';
import { LeftSideMenu } from '../components/LeftSideMenu';
import { Banners } from '../components/Banners';
import { NavButtons } from '../components/NavButtons';

export const HomePage = () => {
    return (
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Box sx={{ marginBottom: '150px' }}></Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginBottom: '200px',
                }}
            >
                <Box sx={{ marginRight: '200px' }}>
                    <LeftSideMenu />
                </Box>
                <Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <NavButtons />
                    </Box>
                    <Banners />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Advantages />
            </Box>
        </Box>
    );
};
