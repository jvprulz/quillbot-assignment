import { Box, Container, Grid, Link } from '@mui/material';

import { makeStyles} from "@material-ui/core";

// Styles for the current page
const useStyles = makeStyles((theme) => ({
    overrideRoot: {
        fontFamily: `"Inter", sans-serif`
    }
}));

//Main Page Component
const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.overrideRoot}>
            <Container maxWidth='false'>
                <Grid container justifyContent='space-between' sx={{margin: '20px 0'}}>
                    <Grid item xs={2} align='left'>
                        <Box>
                            <img src="https://static.grammarly.com/assets/files/3a89d404f9db7ffd42e5fa9b8cd7d93e/grammarly_logo.svg" alt="Logo" />
                        </Box>
                    </Grid>
                    <Grid item xs={2} align='right'>
                        <Link href="#" sx={{fontSize: "14px",fontWeight: 700,lineHeight: "32px", textDecoration: 'none', color:'#0e101a'}}>Log in</Link>
                    </Grid>
                </Grid>
                
            </Container>
        </header>
    )
}

export default Header;