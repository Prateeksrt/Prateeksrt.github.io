import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { ContentArea } from './ContentArea';
import { ProfileArea } from './ProfileArea';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const styles = theme => makeStyles({
    profileContainer: {
        height: '20%',
        [theme.breakpoints.up('sm')]: {
            height: '30%',
        },
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
    },
    contentContainer: {
        height: '80%',
        [theme.breakpoints.up('sm')]: {
            height: '70%',
        },
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

MainContainer.propTypes = {
    onThemeChange: PropTypes.func
};
