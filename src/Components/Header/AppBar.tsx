import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import BarComponents from './BarComponent';
import Toolbar  from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './AppBar.css';

const rightLink = {
    fontsize: 16,
    color: 'common.white',
    ml: 3,
};

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
          <Link
              color='inherit'
              underline="none"
              href="/"
            >
            {'Home'}
            </Link>
          </MenuItem>
          {/* <MenuItem>
            <Link
              color='inherit'
              underline="none"
              href="/Story"
            >
            {'Story'}
            </Link>
          </MenuItem> */}
          <MenuItem>
          <Link
              color='inherit'
              underline="none"
              href="/Life2.0"
            >
            {'Life 2.0'}
            </Link>
          </MenuItem>
          {/* <MenuItem>
            <Link
              color='inherit'
              underline="none"
              href="/Jeberry"
            >
            {'Jebbery in 2023'}
            </Link>
          </MenuItem> */}
          <MenuItem>
            <Link
              color='inherit'
              underline="none"
              href="/Mymap"
            >
            {'MyMap'}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              color='inherit'
              underline="none"
              href="/ArcMap"
            >
            {'ArcMap'}
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
}

/*
<Box sx={{ flex: 1, margin:'0 0 0 0'}} color="inherit"/>
                        <Link
                            variant='h6'
                            underline='none'
                            color="inherit"
                            href="/"
                            sx={{ fontSize: 24 }}
                        >
                            {'HOME'}
                        </Link>
*/

function AppBar(){
    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <BarComponents position="fixed" color="primary">
                    <Toolbar sx={{ justifyContent: 'space-between'}}>
                        <BasicMenu />
                        
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}} className="headerRight_object">
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="/SignIn"
                            sx={rightLink}
                        >
                        {'About'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/SignUp"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                        {'Profile'}
                        </Link>
                        </Box>   
                    </Toolbar>
                </BarComponents>
            </ThemeProvider>
        </div>
    );
}

export default AppBar;