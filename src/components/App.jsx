import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { MainContainer } from './MainContainer';
import { ThemeProvider } from '@material-ui/styles';
import { useTheme, makeStyles, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => makeStyles({
    appBody: {
        height: '100%',
        width: '100%',
        background: `linear-gradient(135deg,  ${theme.palette.info.light}, ${theme.palette.success.light} 50%, ${theme.palette.success.main})`,
    },
});

const createTheme = type => createMuiTheme({
    palette: {
        type: type,
    },
});

const AppBody = () => {
    const [themeType, setThemeType] = useState('light');
    const classes = styles(useTheme())();
    const newTheme = createTheme(themeType);

    return (
        <Grid container className={classes.appBody} justify="center" alignItems="center">
            <ThemeProvider theme={newTheme}>
                <MainContainer onThemeChange={setThemeType}/>
            </ThemeProvider>
        </Grid>
    );
};

const App = () => (<AppBody />);

export default App;