import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import LoginOptions from './Components/LoginOptions';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Drawer from '@mui/material/Drawer';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';

export function Navbar() {
    const styling = {
        listStyleType: "none",
        color: "white",
        textDecoration: "none"
    }
    const [flag, setTheme] = useState("light");
    const darkTheme = createTheme({
        palette: {
            mode: flag,
        },
    });

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    const drawerWidth = 240;

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = React.useState(true);
    const handleClick = () => {
        setOpen1(!open1);
    };

    const flag1 = useNavigate();
    return (
        <div className='container-fluid'>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ flexDirection: 'column' }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                onClick={handleDrawerOpen}
                                aria-label="menu"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                                <MenuIcon />
                            </IconButton>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }} 
                                       
                                    />
                            </Search>
                            
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                Dashboard
                            </Typography>

                            <Link style={styling} to="/"><Button color="inherit">Home</Button></Link>
                            <Link style={styling} to="/students"><Button color="inherit">Students List</Button></Link>
                            <Link style={styling} to="/trial"><Button color="inherit">Trial </Button></Link>
                            <Button startIcon={(flag !== "light" ? <Brightness5Icon /> : <Brightness2Icon />)} onClick={() => setTheme(flag === "light" ? "dark" : "light")} color="inherit">
                                {flag === "light" ? "Dark" : "Light"}
                            </Button>
                            <Link>
                                <Button>
                                    <LoginOptions />
                                </Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Typography variant='h4' display="block" gutterBottom>
                            WELCOME 😊
                        </Typography>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemButton onClick={() => { flag1("/dashboard") }}>
                                    <ListItemIcon>
                                        <DashboardCustomizeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Components" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SettingsOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Utilities" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderOpenOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Pages" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AutoGraphOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Charts" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BackupTableRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tables" />
                                </ListItemButton>
                            </ListItem>
                        </List>

                        <Divider />
                    </Drawer>
                </Box>
            </ThemeProvider>
        </div>
    );
}