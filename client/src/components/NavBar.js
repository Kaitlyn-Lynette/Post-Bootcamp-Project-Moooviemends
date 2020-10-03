import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/Inbox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    background: 'rgba(255, 216, 99)',
  },
});

const BottomNav = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to='/'
        icon={<HomeIcon style={styles.icon} />}
        style={styles.button}
      />
      <BottomNavigationAction
        component={Link}
        to='/search'
        icon={<SearchIcon style={styles.icon} />}
        style={styles.button}
      />
      <BottomNavigationAction
        component={Link}
        to='/create'
        icon={<AddCircleOutlineIcon style={styles.icon} />}
        style={styles.button}
      />
    </BottomNavigation>
  );
};

const styles = {
  button: {
    padding: 0,
  },
  icon: {
    color: 'black',
  },
};

export default BottomNav;
