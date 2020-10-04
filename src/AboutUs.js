import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headings: {
        color: 'darkgrey',
        alignItems: 'Center',
        textAlign: 'Center'
    },
    root: {
        margin: 8,
        height: 700,
    },
    media: {
      height: 50,
      width: 80,
      paddingTop: '100%', // 16:9
      paddingRight: '35%',
      paddingLeft: '35%',
      paddingBotton: '35%',
      spacing: 10,
      alignItems: 'Center'
    //   height: 50,
    //     width: 170,
    //     paddingTop: '65.25%', // 16:9
    //     paddingLeft: '35%',
    //     spacing: 10,
    },
    nameHeadings: {
        color: 'darkseagreen',
    },
}));

const AboutUs = () => {
    const classes = useStyles();
    return (
        <div>
        <GridList cols={4} cellHeight={600} >
            <GridListTile cols={1}>
                <Card className={classes.root}>

                            <CardMedia
                            className={classes.media}
                            image={require('./npxLogo.png')}
                            title="npx logo"
                            />
                            <CardHeader
                                className={classes.headings}
                                // title="About Us"
                                subheader="NPX is an innovation and project management start-up in the nuclear energy sector."
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
                    <GridList cols={4} cellHeight={500} spacing={4} >
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Aarti Vasudevan"
                                subheader="Innovation Catalyst intern, NPX. Full time music nerd, and learning about front-end systems everyday"
                            />
                            <CardMedia
                                className={classes.media}
                                image={require('./memberPics/aarti.JPG')}
                                title="aarti"/>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Arturas Zuta"
                                subheader="Innovation Catalyst, NPX.
                                 Full Stack Developer. Anything/everything tech enthusiast."
                            />
                            <CardMedia
                                className={classes.media}
                                image={require('./memberPics/arturas.jpg')}
                                title="arturas"/>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Emma Houck"
                                subheader="Innovation Catalyst intern, NPX. 
                                uWaterloo Mechatronics Engineering, cute dog enthusiast."
                            />
                            <CardMedia
                                className={classes.media}
                                image={require('./memberPics/emma.jpg')}
                                title="emma"/>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.nameHeadings}
                                title="Quinn Hodges"
                                subheader="Innovation Catalyst, NPX"
                            />
                        </Card>
                    </GridListTile>
                </GridList>
                </Card>
                
            </GridListTile>
        </GridList>
        </div>
    );
};
export default AboutUs;
