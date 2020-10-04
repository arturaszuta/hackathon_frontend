import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from './LOGO.png';
import {Link} from 'react-router-dom';
import Backbtn from './back-icon.jpg';
import { useLocation } from 'react-router-dom'

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
    },
    backimage: {
      height: 30,
        width: 20,
      paddingRight: 30,
    }
  }));

const Header = () => {
    const classes = useStyles();
    const location = useLocation();
    var showBackBtn = false;
    if(location.pathname!="/home"){
      showBackBtn = true;
    }
    return (
        <AppBar position="static" className={classes.root}>
        <Toolbar>
          {showBackBtn && <Link to="/home"><img src={Backbtn} style={{ display: showBackBtn ? "block" : "none" }} alt="back icon" className={classes.backimage}/></Link>}
    
            <Typography variant="h6" className={classes.title}>
            Greenhouse X
            </Typography>
            <img src={Logo} alt="website logo" className={classes.image}/>
        </Toolbar>
        </AppBar>
    );
 }
 export default Header;