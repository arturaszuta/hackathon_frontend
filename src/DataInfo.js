import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    headings: {
        alignItems: 'Center',
    },
    root: {
        margin: 8,
        height: 700,
    },
    media: {
      height: 42,
      paddingTop: '65.25%', // 16:9
      paddingLeft: '65%',
      spacing: 10,
    },
    subheadings: {
        color: 'darkseagreen',
        alignItems: 'Center',
    },
    mediaExpress: {
       height: 70,
       paddingTop: 30,
    },
  }));

const DataInfo = () => {
    const classes = useStyles();
    return (
        <div>
        <GridList cols={4} cellHeight={700} spacing={20} >
            <GridListTile cols={1}>
                <Card className={classes.root}>
                    <CardHeader
                        className={classes.subheadings}
                        title="Datasets"
                    />
                    <GridList cols={1} cellHeight={300} spacing={4} >
                        <GridListTile cols={1}>
                            <Card className={classes.root}>
                                <CardHeader
                                    className={classes.nameHeadings}
                                    subheader="Odiac - Fossil fuel CO2 emission data product"
                                />
                                <a href='https://www.odiac.org/index.html'>
                                    <CardMedia 
                                    className={classes.media}
                                    image={require('./odiacIcon.jpg')}
                                    title="odiac icon"
                                    />
                                </a>
                            </Card>
                        </GridListTile>
                        <GridListTile cols={1}>
                            <Card className={classes.root}>
                                <CardHeader
                                    className={classes.nameHeadings}
                                    subheader="Total carbon monoxide emissions by source, Canada"
                                />
                                <a href='https://open.canada.ca/data/en/dataset/391476a2-fa52-40c6-8423-445167e85b4d'>
                                    <CardMedia 
                                    className={classes.media}
                                    image={require('./governIcon.jpg')}
                                    title="govern Icon"
                                    />
                                </a>
                            </Card>
                        </GridListTile>
                    </GridList>
                </Card>
            </GridListTile>
            <GridListTile cols={3}>
                <Card className={classes.root}>
                    <CardHeader
                        className={classes.headings}
                        title="How We Did This"
                        subheader=" First, we visualized carbon monoxide emissions data from the 
                        Government of Canada, listed by facility. We then used that location data to 
                        filter the ODIAC CO2 fossil fuel emissions dataset to those Canadian locations, and
                        plotted this small subset of the ODIAC data, allowing the user to compare emissions of the two gases.
                        We took a similar approach for the emissions data in Sweden, using a list of cities with
                        latitude and longitude values to pare down the ODIAC dataset, since facility emissions data 
                        was not readily available. "
                    />
                    <GridList cols={4} cellHeight={300} spacing={4} >
                        <GridListTile cols={1}>
                            <Card className={classes.root}>
                                    <CardHeader
                                        className={classes.headings}
                                        subheader="React.js"
                                    />
                                    <CardMedia 
                                    className={classes.media}
                                    image={require('./logo192.png')}
                                    title="odiac icon"
                                    />
                            </Card>
                        </GridListTile>
                        <GridListTile cols={1}>
                            <Card className={classes.root}>
                                    <CardHeader
                                        className={classes.headings}
                                        subheader=" Express.js"
                                    />
                                    <CardMedia 
                                    className={classes.mediaExpress}
                                    image={require('./expressLogo.jpg')}
                                    title="odiac icon"
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
export default DataInfo;
