import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    overrides: {
        typography: {
            fontFamily: ['"Inter"', '"DM Sans"','sans-serif'].join(','),
            h1: {
                fontFamily: '"DM Sans", sans-serif'
            }
        }
    }
});

export default theme;