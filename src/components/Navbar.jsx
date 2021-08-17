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
import Search from './Search';
import logo from './../images/logo.png'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CategoriesResults from '../pages/categoriesResults';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    categories: {
      flexGrow: 1,
      marginLeft: 10,
    },
    logoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      
      marginTop: theme.spacing(1),
      '& > *': {
        padding: theme.spacing(1),
        letterSpacing: theme.spacing(0.8),
        fontWeight: 700
      } 
    },
    logo: {
      maxWidth: 35
    },
    searchWrapper: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.70),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.95),
      },
      marginBottom: 10,
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'center',
        marginLeft: theme.spacing(1),
        width: '40ch'
      },
    },
    searchIcon: {
      position: 'absolute',
      right: 0,
      top: 0
    },
  }),
);

export default function Navbar({dataBooks}) {
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

  let mapOfCategories = new Map();

  let categoriesCount = dataBooks.map((book) => {
    if (book.categories.length > 0) {
      book.categories.map((cat) => {
        if (mapOfCategories.has(cat)) {
          mapOfCategories.set(cat, mapOfCategories.get(cat) + 1);
        } else {
          mapOfCategories.set(cat, 1);
        }
        return false;
      });
    }
    return false;
  });

  let ArrayOfCategories = Array.from(mapOfCategories);
  let mapItems = ArrayOfCategories.map((item) => {
    return (
      <>
        <Route key={item[0]} 
          path={"/"+item[0].replace(' ', '_').toLowerCase()}
          exact
          render={() => (
            <CategoriesResults {...dataBooks} />
          )}
          >  
        </Route>
        <MenuItem component={Link} to={"/"+item[0].replace(' ', '_').toLowerCase()} onClick={handleCloseCategories} key={item[0]}>{item[0]} ({item[1]})</MenuItem>

      </>
    )
  });  


  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <div className={classes.logoWrapper}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Typography variant="h5" >
            BOOK FEVER+
          </Typography>
        </div>
        <Toolbar>
          <CustomDrawer />
          <div className={classes.categories}>
            <Button variant="outlined" color="inherit" onClick={handleMenuCategories} 
              
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true">
              Categories
            </Button>
          </div>
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
            {mapItems}
          </Menu>
        </Toolbar>
        <div className={classes.searchWrapper}>
          <div className={classes.search}>
            <Search dataBooks={dataBooks}/>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export {}