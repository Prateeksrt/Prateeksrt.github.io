import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core';

const styles = theme => makeStyles({
    profileAreaContainer: {
        height: '100%',
    },
    avatarContainer: {
        width: '100%',
    },
    avatar: {
        height: theme.spacing(15),
        width: theme.spacing(15),
        [theme.breakpoints.up('sm')]: {
            height: theme.spacing(20),
            width: theme.spacing(20),
        },
        margin: 'auto',
    }
});

export const ProfileArea = () => {
    const classes = styles(useTheme())();
    return (
        <Grid container alignContent='center'className={classes.profileAreaContainer}>
            <Grid item xs={5} md={12} className={classes.avatarContainer}>
                <Avatar src='' className={classes.avatar} />
            </Grid>
        </Grid>
    );
};