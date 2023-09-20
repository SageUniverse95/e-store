import {
    AppBar,
    Typography,
    Toolbar,
    InputBase,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Badge,
    Box,
    Button,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    return (
        <AppBar sx={{ background: 'white' }}>
            <Toolbar sx={{ justifyContent: 'space-evenly' }}>
                <Typography sx={{ color: 'black', fontSize: '35px' }}>
                    MyStore
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <InputBase
                        sx={{
                            border: '0.5px solid grey',
                            height: '53px',
                            borderRadius: '0px',
                            width: '500px',
                        }}
                        fullWidth
                        placeholder="Search..."
                    />
                    <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
                        <InputLabel>All Categories</InputLabel>
                        <Select
                            sx={{
                                border: '0.5px solid grey',
                                height: '53px',
                                width: '200px',
                                borderRadius: '0px',
                            }}
                            label="All Categories"
                        >
                            <MenuItem>1</MenuItem>
                            <MenuItem>2</MenuItem>
                            <MenuItem>3</MenuItem>
                        </Select>
                        <Button
                            sx={{
                                width: '53px',
                                height: '53px',
                                borderRadius: '0px',
                            }}
                            variant="contained"
                        >
                            <SearchIcon />
                        </Button>
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <PersonIcon
                            sx={{ color: 'black', marginRight: '5px' }}
                        />
                    </Box>
                    <Box sx={{ marginRight: '20px' }}>
                        <Typography variant="body2" color="text.secondary">
                            Sign in
                        </Typography>
                        <Typography sx={{ color: 'black' }}>Account</Typography>
                    </Box>
                    <Box>
                        <Badge
                            sx={{ marginRight: '25px' }}
                            badgeContent="0"
                            color="error"
                        >
                            <FavoriteBorderIcon sx={{ color: 'black' }} />
                        </Badge>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Badge
                            sx={{ marginRight: '25px' }}
                            badgeContent="0"
                            color="error"
                        >
                            <ShoppingBasketIcon sx={{ color: 'black' }} />
                        </Badge>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                Toltal
                            </Typography>
                            <Typography
                                sx={{ color: 'black' }}
                            >{`$0.00`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
