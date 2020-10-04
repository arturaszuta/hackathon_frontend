import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import GridList  from '@material-ui/core/GridList';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    headings: {
        color: 'darkgrey',
        alignItems: 'Center',
    },
    root: {
      maxWidth: 300,
      margin: 8,
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
      spacing: 10,
      
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));



const MainContent = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    return (
    <GridList cols={6} cellHeight={400} spacing={20} >
        
      <Card className={classes.root}>
            <CardHeader
            
            className={classes.headings}
            title="Canadian Emissions Map"
            subheader="2017 Fossil Fuel Emissions Data"
            />
            <CardActionArea>
                <Link to="/AboutUs">
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
            image={require('./mapExample.jpg')}
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
            <CardMedia 
            className={classes.media}
            image={require('./carbonFootprint.png')}
            title="emissions map"
            />
        </CardActionArea>
       </Card>
       <Card className={classes.root}>
         <CardHeader
         className={classes.headings}
           title="About Us"
           subheader="Learn more about the team"
         />
         <CardActionArea>
            <CardMedia 
            className={classes.media}
            image={require('./npxLogo.png')}
            title="emissions map"
            />
         </CardActionArea>
       </Card>
       <Card className={classes.root}>
         <CardHeader
         className={classes.headings}
           title="How It's Made"
           subheader="A more detailed summary of this dataset"
         />
         <CardActionArea>
            <CardMedia 
            className={classes.media}
            image={require('./mapExample.jpg')}
            title="emissions map"
            />
         </CardActionArea>
       </Card>
     </GridList>
    );
  }
  
  export default MainContent;