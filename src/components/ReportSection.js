import * as React from 'react';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';

import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: '#f9faff'
    },
    container: {
        padding:'64px 0 104px', textAlign:'left', maxWidth:'1080px',
        [theme.breakpoints.down('md')]: {
          padding: '20px 15px',
          textAlign: 'center',
        }
    },
    subHeader: {
        padding: '16px 0 72px',
        [theme.breakpoints.down('sm')]: {
          paddingBottom: '20px'
        }
    },
    gridItemSubTitle: {
        marginTop:'24px', fontSize: "16px", lineHeight: "28px",
        [theme.breakpoints.down('sm')]: {
          margin:'10px 0 20px'
        }
    }
}));

const styling = {
    outerCircle: {
        top: 0,left: 0,bottom: 0,right: 0,position: 'absolute',display: 'flex',alignItems: 'center',justifyContent: 'center',
    }
}

const CircularProgressWithLabel = (props) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                sx={{ position: 'absolute', color: 'rgb(230, 230, 232)'}}
                size="145px"
                thickness={2}
                value={100}
            />
            <CircularProgress variant="determinate" size="145px" thickness={2} sx={{color: '#41d9b5'}} {...props} />
            <Box sx={styling.outerCircle}>
                <Typography variant="caption" component="span" color="text.secondary">
                    { `${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

//Main Page Component
const ReportSection = () => {
    const classes = useStyles();
    const [progress1, setProgress1] = React.useState(0);
    const [progress2, setProgress2] = React.useState(0);
    const [progress3, setProgress3] = React.useState(0);

    

    React.useEffect(() => {
        // const reportSection = document.getElementById('reportSection');
        // const position = reportSection.getBoundingClientRect().top + reportSection.ownerDocument.defaultView.pageYOffset;
        // window.onscroll = function(e) {
        //     if ((window.innerHeight + window.scrollY) >= position) {
               
        //     }
            
        // };
       
        const timer = setInterval(() => {
            setProgress1((prevProgress) => (prevProgress >= 76 ? 76 : prevProgress + 1));
            setProgress2((prevProgress) => (prevProgress >= 85 ? 85 : prevProgress + 1));
            setProgress3((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + 1));
        }, 50);

        return () => {
            //clearInterval(timer);
        };
    }, []);
    return (
        <section id="reportSection" className={classes.section}>
            <Container maxWidth='false' disableGutters={true} className={classes.container}>
                <Typography sx={{fontFamily: "Inter,sans-serif",fontSize: "29px",letterSpacing: "-.003em",lineHeight: "38px", fontWeight:'700'}} variant="h2">Premium Customers Report Better Results</Typography>
                <Box className={classes.subHeader}>We routinely survey Grammarly users and have found that:</Box>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <CircularProgressWithLabel  value={progress1} />
                        <Box className={classes.gridItemSubTitle}>76% of Grammarly users find writing more enjoyable.</Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CircularProgressWithLabel value={progress2} />
                        <Box className={classes.gridItemSubTitle}>85% of Grammarly users are now stronger writers.</Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CircularProgressWithLabel value={progress3} />
                        <Box className={classes.gridItemSubTitle}>70% of Grammarly users reported an increased level of writing confidence.</Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default ReportSection;