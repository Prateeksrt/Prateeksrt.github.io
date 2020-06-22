import React from 'react';
import './MainContainer.scss';
import './Common.scss';
import { ContentArea } from './ContentArea';
import { ProfileArea } from './ProfileArea';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const styles = theme => makeStyles({
    appBody: {
        height: '80%',
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
        },
    },
});

export const MainContainer = () => {
    const theme = useTheme();
    console.log(theme);
    const classes = styles(theme)();
    const biggerThanSm = useMediaQuery(theme.breakpoints.up('md'));
    const profileHight = biggerThanSm ? 'profile-height-sm-up' : 'profile-height-sm-down';
    const contentHight = biggerThanSm ? 'content-height-sm-up' : 'content-height-sm-down';
    return (
        <Grid container className={classes.appBody} justify="center">
            <Grid container item md={11} lg={10} className="app" direction={'row'} >
                <Grid item md={3} sm={12} className={profileHight}>
                    <ProfileArea />
                </Grid>
                <Grid item md={9} sm={12} className={contentHight}>
                    <ContentArea />
                </Grid>
            </Grid>
        </Grid>
    );
};
