import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
      list: {
    width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About"}
];

export default function CustomDrawer() {
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const anchor = 'left';
  const toggleDrawer = (anchor, open) => (
    event
  ) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // const AdapterLink = ((props, ref) => (
  //   <Link innerRef={ref} {...props} />
  // ));
  const list = (anchor) => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {links.map((mapped, index) => (
            <ListItem component={Link} to={mapped.path} button key={mapped.name} >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : (
                  <GroupIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={mapped.name} />
            </ListItem>
          ))}
        </List>
        <Divider />

      </div>
    )
  };

  return (
    <>
      <IconButton
        edge="start" className={classes.menuButton} aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(anchor, true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </>
  );
}
