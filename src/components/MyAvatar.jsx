import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core';

const styles = theme => makeStyles({
    avatar: {
        height: theme.spacing(15),
        width: theme.spacing(15),
        [theme.breakpoints.up('sm')]: {
            height: theme.spacing(20),
            width: theme.spacing(20),
        },
        [theme.breakpoints.up('lg')]: {
            height: theme.spacing(22),
            width: theme.spacing(22),
        },
        [theme.breakpoints.up('md')]: {
            margin: 'none',
            marginTop: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        margin: 'auto',
        border: `3px solid ${theme.palette.text.disabled}`,
    }
});

export const MyAvatar = ({ src }) => {
    const classes = styles(useTheme())();
    return (
        <Avatar src={src} className={classes.avatar} />
    );
};

MyAvatar.propTypes = {
    src: PropTypes.string
};
