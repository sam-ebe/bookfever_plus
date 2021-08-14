import React, {useState} from 'react';
import { createStyles, alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CustomDrawer from './CustomDrawer';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ConnectionForm from './ConnectionForm';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: 10,
      textAlign: 'center' 
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginBottom: 10,
      height: 45,
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '50ch'
      },
    },
    searchIcon: {
      position: 'absolute',
      right: 0,
      top: 0
    },
    inputRoot: {
      color: 'inherit',

    },
    inputInput: {
      padding: theme.spacing(1.8, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
      transition: theme.transitions.create('width'),
      width: '75vw',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElCategories, setAnchorElCategories] = useState(null);
  const open = Boolean(anchorEl);
  const openCategories = Boolean(anchorElCategories);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuCategories = (event) => {
    setAnchorElCategories(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseCategories = () => {
    setAnchorElCategories(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer />
          <Button variant="outlined" color="inherit" onClick={handleMenuCategories} 
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true">
            Categories
          </Button>
          <Typography variant="h6" >
            Logo
          </Typography>

          {/* If user is connected */}
          {(auth === true) ? 
            <div>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              {/* User Floating Menu*/}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          : 
          <ConnectionForm />}

          {/* Categories Floating Menu*/}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElCategories}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={openCategories}
            onClose={handleCloseCategories}
          >
            <MenuItem onClick={handleClose}>Communication (2)</MenuItem>
            <MenuItem onClick={handleClose}>Health (15)</MenuItem>
            <MenuItem onClick={handleClose}>Kids (10)</MenuItem>
            <MenuItem onClick={handleClose}>Working Life (5)</MenuItem>

          </Menu>
        </Toolbar>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" className={classes.searchIcon} aria-label="search validation">
            <SearchIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
      </AppBar>
    </div>
  );
}

export {}