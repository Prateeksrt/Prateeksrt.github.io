import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

const styles = theme => makeStyles({
    contentAreaContainer: {
        height: '100%',
        backgroundColor: theme.palette.background.default,
        borderLeft: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up('md')]: {
            borderRadius: theme.spacing(3),
        },
    }
});

export const ContentArea = () => {
    const theme = useTheme();
    const classes = styles(theme)();
    return (
        <div className={classes.contentAreaContainer}></div>
    );
};