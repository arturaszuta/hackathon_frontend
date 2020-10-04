import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from './LOGO.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'darkseagreen',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image: {
        height: 50,
        width: 70,
    }
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Greenhouse X
            </Typography>
            <img src={Logo} alt="website logo" className={classes.image}/>
        </Toolbar>
        </AppBar>
    );
 }
 export default Header;