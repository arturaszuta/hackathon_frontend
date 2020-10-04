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
  }));


const DataInfo = () => {
    const classes = useStyles();
    return (
        <div>
        <Header />
        <GridList cols={4} cellHeight={400} spacing={20} >
            <GridListTile cols={1}>
                <Card className={classes.root}>
                        
                            <CardMedia
                            className={classes.media}
                            
                            />
                </Card>
            </GridListTile>
            <GridListTile cols={3}>
                <Card className={classes.root}>
                    <CardHeader
                        className={classes.headings}
                        title="How It's Made"
                        subheader="A detailed description of the dataset"
                    />
                </Card>
            </GridListTile>
        </GridList>
        </div>
    );
};
export default DataInfo;