import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid  from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    headings: {
        color: 'darkgrey',
        alignItems: 'Center',
        height: '50px'
    },
    root: {
      maxWidth: 300,
      margin: 8,
      height: '400px'
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
      spacing: 10,
      
    },

  }));



const MainContent = () => {
    const classes = useStyles();
  
    return (
    <Grid container justify="space-around" cols={6} cellHeight={400} spacing={20} direction="row">
        
      <Card className={classes.root}>
            <CardHeader
            
            className={classes.headings}
            title="Canadian Emissions Map"
            subheader="2017 Fossil Fuel Emissions Data"
            />
            <CardActionArea>
              <Link to="/MapChart">
                    <CardMedia
                    className={classes.media}
                    image={require('./mapExample.jpg')}
                    title="emissions map"
                    />
              </Link>
            </CardActionArea>
      </Card>
         <Card className={classes.root}>
         <CardHeader
         className={classes.headings}
           title="Swedish Emissions Map"
           subheader="2017 Fossil Fuel Emissions Data"
         />
         <CardActionArea>
            <CardMedia 
            className={classes.media}
            image={require('./sweden.jpg')}
            title="emissions map"
            />
         </CardActionArea>
       </Card>
       <Card className={classes.root}>
         <CardHeader
         className={classes.headings}
           title="What's Your Carbon Footprint"
           subheader="Use this calculator to find out"
         />
         <CardActionArea>
           <a href='//www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/'>
              <CardMedia 
              className={classes.media}
              image={require('./carbonFootprint.png')}
              title="emissions map"
              />
            </a>
        </CardActionArea>
       </Card>
       <Card className={classes.root}>
         <CardHeader
         className={classes.headings}
           title="About Us"
           subheader="Learn more about the team"
         />
         <CardActionArea>
         <Link to="/AboutUs">
            <CardMedia 
            className={classes.media}
            image={require('./npxLogo.png')}
            title="emissions map"
            />
          </Link>
         </CardActionArea>
       </Card>
       <Card className={classes.root}>
         <CardHeader
         className={classes.headings}
           title="How It's Made"
           subheader="A more detailed summary of this dataset"
         />
         <CardActionArea>
         <Link to="/DataInfo">
            <CardMedia 
            className={classes.media}
            image={require('./dataIcon.png')}
            title="emissions map"
            />
          </Link>
         </CardActionArea>
       </Card>
     </Grid>
    );
  }
  
  export default MainContent;