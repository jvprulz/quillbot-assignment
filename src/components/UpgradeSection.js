import { Box, Button, Container, Typography } from '@mui/material';

import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    overrideRoot: {
        fontFamily: `"Inter", sans-serif`,
        [theme.breakpoints.down('sm')]: {
            minHeight: 'auto !important',
            padding: '20px 15px !important'
        }
    },
    button: {
        '&:hover': {
            backgroundColor: '#15c39a !important'
        }
    },
    headerH2: {
        fontFamily: "Inter,sans-serif !important",fontSize: "42px !important",fontWeight:'700 !important',letterSpacing: "-.005em !important",lineHeight: "52px !important",
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px !important',
            lineHeight: "35px !important",
        }
    },
    subHeader:{
        margin: '16px 0 24px', fontSize: "20px", lineHeight: "32px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px !important',
            lineHeight: "25px !important",
        }
    }
}));

const styling = {
    section : {
        minHeight: '492px', 
        background: 'no-repeat left -200px bottom -90px url(https://static.grammarly.com/assets/files/7704056c286a7b6b242f7f6839113502/swoosh.png)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center',
        padding: '0 24px'
    },
    
    button:{ width: '284px', height: '48px', textTransform:'none',backgroundColor: '#11a683', fontFamily:'"Inter", sans-serif', fontSize: '14px', lineHeight: '32px',fontWeight:'700' }
}

//Main Page Component
const UpgradeSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.overrideRoot} style={styling.section}>
            <Container maxWidth='false' disableGutters={true} sx={{maxWidth: '1080px'}}>
                <Typography variant="h2" className={classes.headerH2}>
                    Take Your Writing from Good to Great
                </Typography>
                <Box className={classes.subHeader}>
                    Unlock Grammarly Premium’s advanced features to up-level your communication.
                </Box>
                <Button variant="contained" size="large" color="success" sx={styling.button} className={classes.button}>Upgrade to Grammarly Premium</Button>
            </Container>
        </section>
        
    )
}
export default UpgradeSection;