import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { ContentArea } from './ContentArea';
import { ProfileArea } from './ProfileArea';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const styles = theme => makeStyles({
    profileContainer: {
        height: '24%',
        [theme.breakpoints.up('sm')]: {
            height: '29%',
        },
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
    },
    contentContainer: {
        height: '75%',
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
            height: '90%',
        }
    }
});

export const MainContainer = ({ onThemeChange }) => {
    const theme = useTheme();
    const classes = styles(theme)();
    return (
        <Grid container item xs={12} md={11} lg={10} xl={9} className={classes.app} direction={'row'} >
            <Grid item xs={12} md={4} lg={3} className={classes.profileContainer}>
                <ProfileArea />
            </Grid>
            <Grid item xs={12} md={8} lg={9} className={classes.contentContainer}>
                <ContentArea onThemeChange={onThemeChange}/>
            </Grid>
        </Grid>
    );
};

MainContainer.propTypes = {
    onThemeChange: PropTypes.func
};
