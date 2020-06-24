import React from 'react';
import { ContentArea } from './ContentArea';
import { ProfileArea } from './ProfileArea';
import Grid from '@material-ui/core/Grid';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const styles = theme => makeStyles({
    profileContainer: {
        height: '30%',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
    },
    contentContainer: {
        height: '70%',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
    },
    app: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `3px 3px 5px ${theme.palette.divider}`,
        height: '100%',
        [theme.breakpoints.up('md')]: {
            borderRadius: `${theme.spacing(3)}px`,
            height: '80%',
        }
    }
});

// eslint-disable-next-line react/prop-types
export const MainContainer = ({ onThemeChange }) => {
    const theme = useTheme();
    const classes = styles(theme)();
    return (
        <Grid container item xs={12} md={11} lg={10} className={classes.app} direction={'row'} >
            <Grid item xs={12} md={3} className={classes.profileContainer}>
                <ProfileArea />
            </Grid>
            <Grid item xs={12} md={9} className={classes.contentContainer}>
                <ContentArea onThemeChange={onThemeChange}/>
            </Grid>
        </Grid>
    );
};
