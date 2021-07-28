import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Badge from '@material-ui/core/Badge';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Tabbar from '../Tabbar/Tabbar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar:{
    color:"black",
    backgroundColor:"white",
  },
  
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoimg:{
    
    height: '100%',
    position: 'absolute',
    left:"50%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  


  return (
    <div className={classes.grow}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div  className={classes.logoimg}>
            <img src="./trovalogo.png" alt=""/>
          </div>
          <div className={classes.grow} />
          <div >
            <IconButton  color="inherit">
              <Badge variant="dot" color="secondary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton  color="inherit">
              <Badge variant="dot" color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            
          </div>
          
        </Toolbar>
        <Tabbar/>
      </AppBar>
      
    </div>
  );
}