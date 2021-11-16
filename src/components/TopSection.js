import * as React from 'react';
import { Box, Button, Container, Grid, LinearProgress, Typography } from '@mui/material';

import { makeStyles} from "@material-ui/core";

// Data for the current page
const data1 = [
  {
      image1: "https://static.grammarly.com/assets/files/1495248700340626177a3f4fb713a94d/writing_sample.svg",
      image2: "https://static.grammarly.com/assets/files/32847965b20166d16b376b3f97d7ad65/grammarly_suggestion.svg",
      imageMobile1: "https://static.grammarly.com/assets/files/c1615dfecbbc277259f60c7461994468/mobile.png", 
      imageMobile2: "https://static.grammarly.com/assets/files/42e0587aa278ef8c3a3ecab5be8d42c3/mobile@2x.png 2x",
      alt1: "Rephrase Sentence",
      alt2: "Rephrase Sentence"
  },
  {
      image1: "https://static.grammarly.com/assets/files/718a361635f4474a3b373645dce51bec/writing_sample.svg",
      image2: "https://static.grammarly.com/assets/files/299da6fd3e0803d745cb860de475a4e5/grammarly_suggestion.svg",
      imageMobile1: "https://static.grammarly.com/assets/files/c1615dfecbbc277259f60c7461994468/mobile.png", 
      imageMobile2: "https://static.grammarly.com/assets/files/42e0587aa278ef8c3a3ecab5be8d42c3/mobile@2x.png 2x",
      alt1: "Enhance word choice",
      alt2: "Enhance word choice"
  },
  {
      image1: "https://static.grammarly.com/assets/files/467997bcab46bc3b210b11951fa061d8/writing_sample.svg",
      image2: "https://static.grammarly.com/assets/files/8557e8eb1af323bdc9bb1cc8acff9bb7/grammarly_suggestion.svg",
      imageMobile1: "https://static.grammarly.com/assets/files/1028e942a570cd89b44a5914cfc9eba7/mobile.png", 
      imageMobile2: "https://static.grammarly.com/assets/files/ccc513909b90c59f62277a3493cfc1dc/mobile@2x.png 2x",
      alt1: "Add punctuation",
      alt2: "Add punctuation"
  },
  {
      image1: "https://static.grammarly.com/assets/files/18c5385a8f59a60ee1a389426a2a0b89/writing_sample.svg",
      image2: "https://static.grammarly.com/assets/files/d9d689c835ee698bca792fe86759fbe1/grammarly_suggestion.svg",
      imageMobile1: "https://static.grammarly.com/assets/files/c38481a57a0c10a84deafe5ca21d6eac/mobile.png", 
      imageMobile2: "https://static.grammarly.com/assets/files/90b995e0a51631a514394463af78cc81/mobile@2x.png 2x",
      alt1: "Strike the right tone",
      alt2: "Strike the right tone"
  }
]


const data2 = [
  {
      title:"Clear, confident communication",
      subTitle: "Take the guesswork out of great writing." 
  },
  {
      title:"Comprehensive real-time feedback",
      subTitle: "Effective writing takes more than good grammar." 
  },
  {
      title:"Support you can rely on",
      subTitle: "Write with a second pair of eyes that never gets tired." 
  },
  {
      title:"Strike the right tone",
      subTitle: "Make the best impression, every time." 
  }
]

//Styles for the current page
const styling = {
    section: {background: 'url(https://static.grammarly.com/assets/files/06666c30f97cce25ac1cf1c4573332c2/swoosh.png) no-repeat left -150px top -70px', padding: '0 24px', minHeight:'680px'},
    header1: {
        marginBottom:'24px', paddingTop:'32px',fontFamily:'"DM Sans", sans-serif', fontSize: '42px', fontWeight:'700', lineHeight:'52px'
    },
    button: {
        width: '284px',height: '45px', textTransform:'none', backgroundColor: '#11a683', fontFamily:'"Inter", sans-serif', fontSize: '14px', lineHeight: '32px',fontWeight:'700'
    },
    indicatorItem: {
        fontFamily: "Inter,sans-serif",textAlign:'left', marginBottom: '20px', cursor:'pointer'
    },
    indicatorItemHeader: {
        fontFamily: "Inter,sans-serif",fontSize: "16px", lineHeight: "24px",fontWeight: '700', color: 'rgb(74, 110, 224)'
    },
    indicatorItemHeaderMobile: {
        fontFamily: "Inter,sans-serif",fontSize: "21px", lineHeight: "28px",fontWeight: '700', color: '#0E101A'
    },
    indicatorItemSpan: {
        color: '#6D758D',fontSize: "14px", lineHeight: "22px", letterSpacing: '0px'
    },
    indicatorItemSpanMobile: {
        color: '#6D758D',fontSize: "16px", lineHeight: "26px", letterSpacing: '0px'
    },
    imageMobile: {
        maxWidth: '100%'
    }
}
    
const useStyles = makeStyles((theme) => ({
    overrideRoot: {
        fontFamily: `"Inter", sans-serif`
    },
    button: {
        fontFamily: 'Inter,sans-serif',
        fontSize: '14px',
        lineHeight: '32px',
        '&:hover': {
            backgroundColor: '#15c39a !important'
        }
    },
    textContainer: {
        transition: 'all .4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05,1.05)',
          [theme.breakpoints.down('md')]: {
            transform: 'none' 
          }
        }
    },
    image1:{
        borderRadius: '10px', maxWidth: '100%', opacity: '0', position: "absolute", top: '-50px', left:'20%'
    },
    image2:{
        borderRadius: '10px', maxWidth: '100%', position: "absolute", bottom: "50px", left: "30%", opacity: '0',
        boxShadow: '0 14px 55px rgb(109 117 141 / 20%)'
    },
    gridContainerDesktop: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important'  
        }
    },
    gridContainerMobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none !important'  
        }
    },
}));


const ImageItemsDesktop = (props) => {
  return (
      <Box key={props.index} className={props.index === 0 ? 'active' : null} sx={{position:'absolute', width: '100%',height:'336px'}}>
          <img className={props.classes.image1} src={props.item.image1} alt={props.item.alt1} />
          <img className={props.classes.image2} src={props.item.image2} alt={props.item.alt2} />
      </Box>
  )
}


const IndicatorItems = (props) => {
  return (
      <Box key={props.index} sx={styling.indicatorItem} className={props.classes.textContainer}>
          <Typography sx={styling.indicatorItemHeader} variant="h5">{props.item.title}</Typography>
          <Box sx={styling.indicatorItemSpan} component="span">{props.item.subTitle}</Box>
          <Box sx={{width: '100%', marginTop: '10px'}}>
              <LinearProgress variant="determinate" value={props.value} />
          </Box>
      </Box>
  )
}

const ImageIndicatorItemsMobile = (props) => {
    return (
        <Box key={props.index} sx={{marginBottom: '25px'}}>
            <picture>
                <img style={styling.imageMobile} src={props.item.imageMobile1} alt={props.item.alt1}/>
            </picture>
            <Box className={props.classes.textContainer}>
                <Typography sx={styling.indicatorItemHeaderMobile} variant="h5">{data2[props.index].title}</Typography>
                <Box sx={styling.indicatorItemSpanMobile} component="span">{data2[props.index].subTitle}</Box>
            </Box>
        </Box>
    )
}

//Main Page Component
const TopSection = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState({progress0: 0, progress1: 0, progress2: 0, progress3: 0});
    const indicatorItemContainerRef = React.useRef();
    const imageContainerRef =  React.useRef();

    
    const changeImages = (nextProgressBarIndex) => {
        console.log(nextProgressBarIndex)
        Array.from(imageContainerRef.current.childNodes).map((item, i)=>{
            if(nextProgressBarIndex === i) {
                if(nextProgressBarIndex === 0) {
                    item.classList.add('active');
                    imageContainerRef.current.childNodes[3].classList.remove('active');
                } else {
                    item.classList.add('active');
                    imageContainerRef.current.childNodes[i-1].classList.remove('active');
                }
            }
        });
    }
    
    React.useEffect(() => {
      let index = 0;
      let currentProgress = '';      
      const timer = setInterval(() => {
          setProgress(oldProgress => {
              currentProgress = `progress${index}`;
              if (oldProgress[currentProgress] === 100) {
                  index < 3 ? index += 1 : index = 0;
                  changeImages(index);
                  return {...progress, [currentProgress]: 0};
              }
              return { ...progress,  [currentProgress]: Math.min(oldProgress[currentProgress] + 4, 100)}
          });
      }, 200);
      
      return () => {
        clearInterval(timer);
      }
    }, []);

    return (
        <section className={classes.overrideRoot} style={styling.section}>
            <Container className={classes.overrideRoot} maxWidth='false' disableGutters={true} sx={{ maxWidth: '1080px', position:'relative' }}>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h1" sx={styling.header1}>Aim High With Brilliant Writing</Typography>
                    <Button variant="contained" size="large" sx={styling.button} className={classes.button}>Upgrade to Grammarly Premium</Button>
                </Box>
                <Grid container className={classes.gridContainerDesktop} justifyContent='space-between' sx={{marginTop: '100px'}}>
                    <Grid item sm={12} md={6} sx={{position: 'relative'}} ref={imageContainerRef}>
                      {
                        data1.map( (item, i) => <ImageItemsDesktop index={i} item={item} classes={classes} imageContainerRefs={imageContainerRef} classes={classes} /> )
                      }
                    </Grid>
                    <Grid item sm={12} md={4}>
                      {
                        data2.map( (item, i) => <IndicatorItems index={i} item={item} value={progress[`progress${i}`]} classes={classes} indicatorItemContainerRef={indicatorItemContainerRef}/> )
                      }
                    </Grid>
                </Grid>
                <Box className={classes.gridContainerMobile} ref={indicatorItemContainerRef}>
                  {
                    data1.map( (item, i) => <ImageIndicatorItemsMobile index={i} item={item} classes={classes}/> )
                  }
                </Box>
            </Container>
        </section>
    )
}

export default TopSection;