import { Box, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiscountIcon from '@mui/icons-material/Discount';

export const Advantages = () => {
    return (
        <Box sx={{ display: 'flex', marginLeft: '25px' }}>
            <Box sx={{ display: 'flex' }}>
                <Paper
                    sx={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ffebee',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <LocalShippingIcon
                        sx={{ marginLeft: '17px', color: '#f44336' }}
                    />
                </Paper>
                <Box sx={{ marginLeft: '15px' }}>
                    <Typography fontSize="18px" variant="body2">
                        Free delivery
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Free shipping on all order
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '25px' }}>
                <Paper
                    sx={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ffebee',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <SupportAgentIcon
                        sx={{ marginLeft: '17px', color: '#f44336' }}
                    />
                </Paper>
                <Box sx={{ marginLeft: '15px' }}>
                    <Typography fontSize="18px" variant="body2">
                        Online Support 24/7
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Support online 24 hours a day
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '25px' }}>
                <Paper
                    sx={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ffebee',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <AccountBalanceWalletIcon
                        sx={{ marginLeft: '17px', color: '#f44336' }}
                    />
                </Paper>
                <Box sx={{ marginLeft: '25px' }}>
                    <Typography fontSize="18px" variant="body2">
                        Money Return
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Back guarantee under 7 days
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: '25px' }}>
                <Paper
                    sx={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#ffebee',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <DiscountIcon
                        sx={{ marginLeft: '17px', color: '#f44336' }}
                    />
                </Paper>
                <Box sx={{ marginLeft: '15px' }}>
                    <Typography fontSize="18px" variant="body2">
                        Member Discount
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        On every order over $120.00
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
