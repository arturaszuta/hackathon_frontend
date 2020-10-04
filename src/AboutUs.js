import React from 'react';
import Header from './Header.js'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import GridList  from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headings: {
        color: 'darkgrey',
        alignItems: 'Center',
    },
    root: {
        margin: 8,
        height: 450,
    },
    media: {
      height: 50,
      width: 170,
      paddingTop: '65.25%', // 16:9
      paddingLeft: '35%',
      spacing: 10,
      
    },
    nameHeadings: {
        color: 'darkseagreen',
    },
  }));

const AboutUs = () => {
    const classes = useStyles();
    return (
        <div>
        <Header />
<<<<<<< HEAD
        <div>hi there jfdlsfjklsfjklsjfklsjfklsjdasdasdasd fklsjfklsjf</div>
=======
        <GridList cols={4} cellHeight={400} spacing={20} >
            <GridListTile cols={1}>
                <Card className={classes.root}>
                        
                            <CardMedia
                            className={classes.media}
                            image={require('./npxLogo.png')}
                            title="npx logo"
                            />
                </Card>
            </GridListTile>
            <GridListTile cols={3}>
                <Card className={classes.root}>
                    <CardHeader
                        className={classes.headings}
                        title="About Us"
                        subheader="NPX Innovation"
                    />
                    <GridList cols={4} cellHeight={200} spacing={4} >
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Aarti Vasudevan"
                            />
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Arturas Zuta"
                            />
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Emma Houck"
                            />
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Quinn Hodges"
                            />
                        </Card>
                    </GridListTile>
                </GridList>
                </Card>
                
            </GridListTile>
        </GridList>
>>>>>>> 203cd9a54e6acf8b32b488e30cfbe7766a688c2a
        </div>
    );
};
export default AboutUs;