import { Box, Button, Container, Grid, Modal, Typography } from '@mui/material';
import * as React from 'react';

import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    section: {
        fontFamily: `"Inter", sans-serif`,
        background: 'url(https://static.grammarly.com/assets/files/de31835f4f228f5ffb03a8a527a44413/swoosh.png) no-repeat right -300px bottom -70px ',
        backgroundColor: '#3659b5',
        margin: '0 auto',
        padding: '96px 24px',
        textAlign: 'left',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 15px',
            backgroundImage: 'none',
            backgroundColor: '#3659b5',
        }
    },
    videoContainer: { 
        position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',maxWidth: '70%',bgcolor: 'rgba(0,0,0,.8)',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95%'
        }
    },
    container:{
        justifyContent: 'space-between', alignItems: 'center', maxWidth:'1080px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    },
    headerH2: {
        fontSize: "29px !important",letterSpacing: "-.003em !important",lineHeight: "38px !important",fontWeight:'700 !important', marginBottom: '16px !important',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    subHeader : {
        fontSize: "18px", lineHeight: "32px", fontWeight: '400',
        [theme.breakpoints.down('sm')]: {
            lineHeight: "25px",
            textAlign: 'center',
            marginBottom: '15px'
        }
    },
})); 

const styling = {
    closeBtn: {cursor: 'pointer', height: '17px',position: 'absolute',right: '0',top: '-30px',width: '18px'},
}

//Main Page Component
const GetJobDoneSection = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <section className={classes.section}>
            <Container maxWidth='false' disableGutters={true} sx={{ maxWidth: '1080px' }}>
                <Grid container className={classes.container}>
                    <Grid item sx={{maxWidth: '410px'}}>
                        <Typography variant="h2" className={classes.headerH2}>Get the Job Done</Typography>
                        <Box className={classes.subHeader}>Effective communication is the key to making things happen.</Box>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleOpen}>
                            <picture>
                                <source media="(min-width: 513px)" srcSet="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png, https://static.grammarly.com/assets/files/6f97131f829f8d0031bf8fa65c0a3f5d/video@2x.png 2x" />
                                <source media="(max-width: 512px)" srcSet="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png, https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png 2x" />
                                <img style={{borderRadius: '10px', maxWidth: '100%'}} src="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png" srcSet="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png, https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png 2x" alt="Video Thumbnail" />
                            </picture>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container disableGutters={true} maxWidth='false' className={classes.videoContainer} >
                    <img onClick={handleClose} style={styling.closeBtn} src="https://static.grammarly.com/assets/files/fe7399c5c1a75914a58613ac4c77e181/cross.svg" alt="video thumbnail" />
                    <video preload="auto" autoplay="" style={{width: '100%'}}>
                        <source src="https://static.grammarly.com/assets/videos/professional_outcomes.mp4" />
                    </video>
                </Container>
            </Modal>
        </section>
    )
}
export default GetJobDoneSection;