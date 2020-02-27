import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Routes from './../../routes';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#272C34',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My dev website
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
        <a href="/home">
            <ListItem button key={'Home'}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText primary={'Home'} />
                
            </ListItem>
        </a>
        </List>
        <Divider />
        <List>
            <ListItem button key={'Project1'}>
                <ListItemText primary={'Project1'} />                
            </ListItem>
            <a href="/mainTeste">
            <ListItem button key={'Project2'}>
                <ListItemText primary={'Main'} />
            </ListItem>
            </a>
            <ListItem button key={'Project3'}>
                <ListItemText primary={'Project3'} />
            </ListItem>
            <ListItem button key={'Project4'}>
                <ListItemText primary={'Project4'} />
            </ListItem>
            <ListItem button key={'Project5'}>
                <ListItemText primary={'Project5'} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
}