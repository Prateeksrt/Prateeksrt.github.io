import React from 'react';
import { ContentArea } from './ContentArea';
import { ProfileArea } from './ProfileArea';
import Grid from '@material-ui/core/Grid';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const styles = theme => makeStyles({
    appBody: {
        height: '80%',
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
        },
    },
    profileContainer: {
        [theme.breakpoints.down('sm')]: {
            height: '30%',
        },
        height: '100%',
    },
    contentContainer: {
        [theme.breakpoints.down('sm')]: {
            height: '70%',
        },
        height: '100%',
    },
    app: {
        backgroundColor: theme.palette.background.default,
        boxShadow: `3px 3px 10px ${theme.palette.background.default}`,
        [theme.breakpoints.up('sm')]: {
            borderRadius: `${theme.spacing(3)}px`,
        }
    }
});

export const MainContainer = () => {
    const theme = useTheme();
    const classes = styles(theme)();
    return (
        <Grid container className={classes.appBody} justify="center">
            <Grid container item md={11} lg={10} className={classes.app} direction={'row'} >
                <Grid item md={3} sm={12} className={classes.profileContainer}>
                    <ProfileArea />
                </Grid>
                <Grid item md={9} sm={12} className={classes.contentContainer}>
                    <ContentArea />
                </Grid>
            </Grid>
        </Grid>
    );
};
