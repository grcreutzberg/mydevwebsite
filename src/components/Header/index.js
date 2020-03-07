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
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import GameIcon from '@material-ui/icons/SportsEsports';
import CoinIcon from '@material-ui/icons/MonetizationOn';
import HomeIcon from '@material-ui/icons/Home';
import DiceIcon from '@material-ui/icons/Casino';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ColorizeIcon from '@material-ui/icons/Colorize';
import Routes from './../../routes';

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
            LoucademiaDev
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
          <ListItem button key={'Home'} component="a" href="/">
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText primary={'Início'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'convBinario'} component="a" href="/convBinario">
            <ListItemIcon>{<SwapHorizontalCircleIcon />}</ListItemIcon>      
            <ListItemText primary={'Conv. Binário'} />
          </ListItem>
          <ListItem button key={'diceRoll'} component="a" href="/diceRoll">
            <ListItemIcon>{<DiceIcon />}</ListItemIcon>
            <ListItemText primary={'Rolador de Dados'} />
          </ListItem>
          <ListItem button key={'lerolero'} component="a" href="/lerolero">
            <ListItemIcon>{<TextsmsIcon />}</ListItemIcon>
            <ListItemText primary={'Lero Lero'} />
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

//DICE API - http://roll.diceapi.com/
//ColorPiker - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
//convertCoin - https://www.youtube.com/watch?v=tbLziJchz48
//Blackjack - http://deckofcardsapi.com/
/*
          <ListItem button key={'colorPicker'} component="a" href="/colorPicker">
            <ListItemIcon>{<ColorizeIcon />}</ListItemIcon>
            <ListItemText primary={'Color Picker'} />
          </ListItem>
          <ListItem button key={'TicTacToe'} component="a" href="/TicTacToe">
            <ListItemIcon>{<GameIcon />}</ListItemIcon>      
            <ListItemText primary={'TicTacToe'} />
          </ListItem>
          <ListItem button key={'convertCoin'} component="a" href="/convertCoin">
            <ListItemIcon>{<CoinIcon />}</ListItemIcon>
            <ListItemText primary={'Conv. de moeda'} />
          </ListItem>          
          <ListItem button key={'Project4'}>
            <ListItemText primary={'Project4'} />
          </ListItem>
          <ListItem button component="a" href="/mainTeste" key={'Project5'}>
            <ListItemText primary={'Teste'} />
          </ListItem>
*/