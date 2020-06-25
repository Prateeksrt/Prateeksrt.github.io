import React, { useState } from 'react';
import { makeStyles, useTheme, Switch } from '@material-ui/core';

const styles = theme => makeStyles({
    contentAreaContainer: {
        height: '100%',
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up('md')]: {
            borderRadius: theme.spacing(3),
        },
    }
});

// eslint-disable-next-line react/prop-types
export const ContentArea = ({ onThemeChange }) => {
    const [checked, setChecked] = useState(false);
    const classes = styles(useTheme())();
    const handleChange = (v) => {
        setChecked(v.target.checked);
        onThemeChange(v.target.checked ? 'dark' : 'light');
    };
    return (
        <div className={classes.contentAreaContainer}>
            <Switch checked={checked} onChange={handleChange} color="primary"/>
        </div>
    );
};