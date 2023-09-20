import { Box } from '@mui/material';
import { Header } from './Header';

export const Banners = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    width: '500px',
                    height: '310px',
                    backgroundColor: 'salmon',
                    marginRight: '20px',
                }}
            ></Box>
            <Box>
                <Box
                    sx={{
                        width: '300px',
                        height: '150px',
                        backgroundColor: 'salmon',
                        marginBottom: '10px',
                    }}
                ></Box>
                <Box
                    sx={{
                        width: '300px',
                        height: '150px',
                        backgroundColor: 'salmon',
                    }}
                ></Box>
            </Box>
        </Box>
    );
};
