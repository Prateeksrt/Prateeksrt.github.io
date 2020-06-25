import React from 'react';
import PropTypes from 'prop-types';
import { MyAvatar } from './MyAvatar';
import Image from './Prateek_image.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => makeStyles({
    profileAreaContainer: {
        height: '100%',
    },
    avatarContainer: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '35%',
            display: 'flex',
        },
        [theme.breakpoints.up('lg')]: {
            height: '40%',
        },
    }
});

const _ProfileArea = ({ width }) => {
    const classes = styles(useTheme())();
    const alignContent = isWidthUp('md', width) ? 'flex-start' : 'center';
    return (
        <Grid container alignContent={alignContent} className={classes.profileAreaContainer}>
            <Grid item xs={5} sm={4} md={12} className={classes.avatarContainer}>
                <MyAvatar src={Image} />
            </Grid>
        </Grid>
    );
};

_ProfileArea.propTypes = {
    width: PropTypes.string,
};

export const ProfileArea = withWidth()(_ProfileArea);