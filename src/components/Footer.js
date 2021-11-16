import { Container, Grid, Link, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    overrideRoot: {
        fontFamily: `"Inter", sans-serif`
    },
    linkTitle:{
        marginBottom: '5px !important'
    },
    link:{
        '&:hover': {
            borderBottom: '1px solid #9fa6bf',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '5px'
        }
    },
    gridItems: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        }
    }
}));

const footerData = [
    {
        title: "Product",
        subTitles: ["Plans","Grammarly Premium","Grammarly Business","Grammarlay @edu","Grammarly Desktop Apps","The Grammarly Keyboard","Grammarly for MS Office"]
    },
    {
        title: "Company",
        subTitles: ["About","Careers & Culture","Blog","Tech Blog","Press","Affiliates","Grammarly API"]
    },
    {
        title: "Features",
        subTitles: ["Product Feature News","Tone Detector","Grammar Checker","Plagiarism Checker"]
    },
    {
        title: "Trust",
        subTitles: ["User Trust Guidelines","Privacy Policy","Terms Of Service","CA Privacy Notice","Security"]
    },
    {
        title: "Connect",
        subTitles: ["Help Center","Contact Us","Facebook","Instagram","Twitter","LinkedIn"]
    }
]

const styling = {
    icon: {fontSize: '20px', marginRight:'10px',verticalAlign: 'middle'},
    link: {display:'inline-block', textDecoration:"none",marginBottom:"5px", fontSize: '14px',fontWeight: '400', color: '#6d758d',border: '1px solid transparent'},
    linkTitle: {marginBottom:'15px', color: '#1f243c',fontSize: '14px',fontWeight: '700'},
    copyright: { padding: '30px 0', color: "#9fa6bf", fontSize: "12px", fontWeight: '400' }
}

const FooterLinkItems = (props) => {
    switch (props.item) {
        case "Facebook" :
            return (<Box><FacebookIcon sx={styling.icon} /><Link className={props.classes.link} sx={styling.link} href="#">{props.item}</Link></Box>)
        case "Instagram" :
            return(<Box><InstagramIcon sx={styling.icon} /><Link className={props.classes.link} sx={styling.link} href="#">{props.item}</Link></Box>)
        case "Twitter" :
            return(<Box><TwitterIcon sx={styling.icon} /><Link className={props.classes.link} sx={styling.link} href="#">{props.item}</Link></Box>)
        case "LinkedIn" :
            return(<Box><LinkedInIcon sx={styling.icon} /><Link className={props.classes.link} sx={styling.link} href="#">{props.item}</Link></Box>)
        default: 
            return(<Box><Link className={props.classes.link} sx={styling.link} href="#">{props.item}</Link></Box>)
    }
}

const FooterLinkTitle = (props) => {
    return (
        <Grid xs={6} md={2} item className={props.classes.gridItems}>
            <Box key={props.index} sx={styling.linkTitle} className={props.classes.linkTitle}>{props.item.title}</Box>
                {
                    props.item.subTitles.map((elem, i) => <FooterLinkItems index={`${props.index}${i}`} item={elem} classes={props.classes}/>)
                }
        </Grid>
    )
}

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.overrideRoot} id="footer" style={{backgroundColor:'#f0f2fc', padding:'40px 20px 0'}}>
            <Container maxWidth='false' disableGutters={true} sx={{maxWidth: '1080px', textAlign: 'left'}}>
                <Grid container justifyContent='space-between' >
                    {
                        footerData.map((item, i) => <FooterLinkTitle index={`footerTitle${i}`} item={item} classes={classes}/>)
                    }
                </Grid>
                <Box sx={styling.copyright}>2021 &copy; Grammarly Inc.</Box>
            </Container>
        </footer>
    )
}
export default Footer;