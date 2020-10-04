import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
    headings: {
        alignItems: 'Center',
    },
    root: {
        margin: 8,
        height: 600,
    },
    media: {
      height: 50,
      width: 170,
      paddingTop: '65.25%', // 16:9
      paddingLeft: '65%',
      spacing: 10,
    },
    subheadings: {
        color: 'darkseagreen',
        alignItems: 'Center',
    },
  }));


const DataInfo = () => {
    const classes = useStyles();
    return (
        <div>
        <GridList cols={4} cellHeight={600} spacing={20} >
            <GridListTile cols={1}>
                <Card className={classes.root}>
                    <CardHeader
                        className={classes.subheadings}
                        title="Datasets Used"
                    />
                    <GridList cols={1} cellHeight={200} spacing={4} >
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
                    />
                </Card>
            </GridListTile>
        </GridList>
        </div>
    );
=======
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
>>>>>>> main
};
export default DataInfo;
