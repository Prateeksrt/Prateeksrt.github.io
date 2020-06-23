import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    profileAreaContainer: {
        height: '100%',
    }
});

export const ProfileArea = () => {
    const classes = styles();
    return (
        <div className={classes.profileAreaContainer}></div>
    );
};