import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import * as React from 'react';
import { makeStyles} from "@material-ui/core";

const col1Data = [
    {
        title: "Spelling",
        tooltipImage: "https://static.grammarly.com/assets/files/8ce10810d1ced77584f15d910a7b69dd/example-spelling.svg",
        tooltipText: "Eliminate spelling errors."
    },
    {
        title: "Grammar",
        tooltipImage: "https://static.grammarly.com/assets/files/45bb5d7f61028cc68409ac207d58e806/example-grammar.svg",
        tooltipText: "Eliminate grammatical errors."
    },
    {
        title: "Punctuation",
        tooltipImage: "https://static.grammarly.com/assets/files/04a6185f01001090f239f95e005d7b96/example-punctuation.svg",
        tooltipText: "Eliminate spelling errors."
    },
    {
        title: "Conciseness",
        tooltipImage: "https://static.grammarly.com/assets/files/b16a2117a5bc0b5ac49fdcdbbfee30c9/example-conciseness.svg",
        tooltipText: "Make every sentence concise and easy to follow."
    }
]

const col2Data = [
    {
        title: "Everything in Free",
        tooltipImage: "",
        tooltipText: ""
    },
    {
        title: "Clarity-focused sentence rewrites",
        tooltipImage: "https://static.grammarly.com/assets/files/b14251ced92375bba8190092543d2937/example-sentence-rewrites.svg",
        tooltipText: "Automatically rewrite hard-to-read sentences."
    },
    {
        title: "Tone adjustments",
        tooltipImage: "https://static.grammarly.com/assets/files/1e01fcc98c60d4c210320cc735a38368/example-confident-writing.svg",
        tooltipText: "Eliminate hedging language or unnecessary qualifiers to sound more confident."
    },
    {
        title: "Plagiarism detection",
        tooltipImage: "",
        tooltipText: "Ensure your work is fresh and original by checking it against 16 billion web pages."
    },
    {
        title: "Word choice",
        tooltipImage: "https://static.grammarly.com/assets/files/1cb3884004858ec65c71e5f7db9edd54/example-word-choice.svg",
        tooltipText: "Find vivid words to enliven each and every message."
    },
    {
        title: "Formality level",
        tooltipImage: "https://static.grammarly.com/assets/files/d7dae495a77eb1db07abafa627c135db/example-formality.svg",
        tooltipText: "Write with the appropriate tone, even when you're in a hurry."
    },
    {
        title: "Fluency",
        tooltipImage: "https://static.grammarly.com/assets/files/6ae68325cb99c9176eab1924c4bc8ce4/example-fluency.svg",
        tooltipText: "Ensure your word choices sound natural and fluent."
    },
    {
        title: "Additional advanced suggestions",
        tooltipImage: "",
        tooltipText: "Fix inconsistencies in spelling and punctuation, adjust the tone of your writing, and get additional advanced feedback."
    }
];


const useStyles = makeStyles((theme) => ({
    overrideRoot: {
        fontFamily: `"Inter", sans-serif`,
        padding: '0 24px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 15px'
        }
    },
    overrideHeaderH2: {
        fontFamily: `"DM Sans", sans-serif`
    },
    overrideHeaderH3: {
        fontSize: "24px", lineHeight: "32px"
    },
    overrideGridItems: {
        padding: '0 32px', textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px',
            width: '100%'
        },
    },
    overrideListItems: {
        fontSize: "14px", lineHeight: "22px", fontWeight: '400' 
    },
    freePremiumText:{
        minHeight: '70px', fontSize: "15px", lineHeight: "24px",
        [theme.breakpoints.down('sm')]: {
            minHeight: 'auto',
            marginBottom: '5px'
        },
    },
    button: {
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        },
    },
    button2: {
        '&:hover': {
            backgroundColor: '#15c39a !important'
        }
    }
}));


const styling = {
    button1: {
        width: '100%', height: '45px', textTransform:'none', backgroundColor: "#f0f2fc !important", color: "#c6cbde", fontSize: "14px", lineHeight: "32px", fontWeight:'700', pointerEvents: 'auto !important',cursor:'not-allowed !important'
    },
    button2: {
        width:'100%',padding: '0',fontFamily: "Inter,sans-serif",fontSize: "14px",lineHeight: "32px",fontWeight:'700',height: '45px', textTransform:'none',backgroundColor: '#11a683'
    },
    toolTipText: {
        fontFamily: "Inter,sans-serif",fontSize: '12px', lineHeight: '18px'
    },
    headerH3:{
        margin: '4px 0',color: '#0E101A',fontSize: "24px",fontWeight: '700', lineHeight: "32px" 
    }
}

const TooltipItems = (props) => {
    return (
        <ListItem key={props.index} sx={{padding: '0', marginBottom: '8px'}}>
            <ListItemIcon sx={{minWidth: '30px' }}>
                <CheckIcon sx={{color: '#15c39a' }} />
            </ListItemIcon>
            <Tooltip 
                title={
                    <Box sx={{padding: '16px'}}>
                        {props.item.tooltipImage ? <Box >
                            <img style={{maxWidth:'100%'}} src={props.item.tooltipImage} placement="top-start" alt={props.item.title} /> 
                        </Box> : null }
                        {props.item.tooltipText ? <Box sx={styling.toolTipText}>{props.item.tooltipText}</Box>  : null }
                    </Box>   
                }
                placement="top-start"
                sx={{maxWidth:'392px'}}
            >
                <Box className={props.classes.overrideListItems} sx={{borderBottom: '1px dotted #000', padding: '0'}}>{props.item.title}</Box>
            </Tooltip> 
        </ListItem>
    )
}

const UpLevelSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.overrideRoot} style={styling.section}>
            <Container maxWidth='false' disableGutters={true} sx={{ maxWidth: '674px', paddingBottom: '48px', textAlign:'center'}}>
                <Typography  variant="h2" style={{margin: '0 0 8px',fontFamily: "DM Sans,sans-serif",fontSize: "29px",lineHeight: "38px", fontWeight:'700'}}>Up-Level Your Communication</Typography>
                <Box sx={{margin: '8px 0 48px'}}>Unlock Grammarly Premium’s advanced features and suggestions.</Box>
                <Box className='planComparison'>
                    <Grid container>
                        <Grid item sm={12} md={6} className={classes.overrideGridItems}>
                            <Box className="freePlanSummary">
                                <Box className="freePlanSummary-top">
                                    <Box sx={{textTransform: 'uppercase', fontSize: "11px", letterSpacing: ".04em", lineHeight: "16px",color:'#6D758D' }}>For Casual Writing</Box>
                                    <Typography variant="h3" style={styling.headerH3}>Free</Typography>
                                    <Box className={classes.freePremiumText}>Basic Writing Suggestions.</Box>
                                    <Button className={classes.button1} variant="contained" disabled sx={styling.button1}>Included in Premium</Button>
                                </Box>
                                <Box className="freePlanSummary-bottom">
                                    <List sx={{padding: '16px 0 0'}}>
                                        { col1Data.map((item, i) => <TooltipItems index={`tooltipA${i}`} item={item} classes={classes}/>) }
                                    </List>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} className={classes.overrideGridItems}>
                            <Box className="paidPlanSummary">
                                <Box className="paidPlanSummary-top">
                                    <Box sx={{textTransform: 'uppercase',fontSize: "11px", letterSpacing: ".04em", lineHeight: "16px", color:'#6D758D' }}>For Work or School</Box>
                                    <Typography variant="h3" style={styling.headerH3}>Premium</Typography>
                                    <Box className={classes.freePremiumText}>Style, tone, and clarity improvements for writing at work and school.</Box>
                                    <Button  variant="contained" size="large" sx={styling.button2} className={`${classes.button1} ${classes.button2}`}>Upgrade to Grammarly Premium</Button>
                                </Box>
                                <Box className="paidPlanSummary-bottom">
                                    <List sx={{padding: '16px 0 0'}}>
                                        { col2Data.map((item, i) => <TooltipItems index={`tooltipB${i}`} item={item} classes={classes}/>) }
                                    </List>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    )
}

export default UpLevelSection;