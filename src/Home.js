import React from 'react';
import MainContent from './MainContent.js';
import Header from './Header.js'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Logo from './LOGO.png';

const useStyles = makeStyles((theme) => ({
    homeBox: {
        width: '80%',
        height: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        margin: '0 auto',
        marginTop: '100px'
    },
    image: {
        height: 500,
        width: 450,
    },
    box: {
        width: '500px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px'
    }

  }));

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center">
            <Box className={classes.homeBox}>
                <Paper>
                    <Box className={classes.box}>
                        <img src={Logo} alt="website logo" className={classes.image}/>
                        <Typography style={{marginBottom: "50px"}}>
                            Greenhouse X
                        </Typography>
                        <Typography>
                            Bringing Canadian CO2 and CO emissions visualization to your fingertips!
                        </Typography>
                    </Box>
                   
                </Paper>
            </Box>
        </Grid>
    );
};
export default Home;