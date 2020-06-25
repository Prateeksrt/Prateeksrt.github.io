import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { MyAvatar } from './MyAvatar';
import Image from './Prateek_image.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { AboutMe } from './AboutMe';

const styles = theme => makeStyles({
    profileAreaContainer: {
        height: '100%',
    },
    profileItems: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '35%',
        },
        [theme.breakpoints.up('lg')]: {
            height: '40%',
        },
    },
    flexDisplay: {
        display: 'flex',
    },
    marginAuto: {
        margin: 'auto',
    },
});

const _ProfileArea = ({ width }) => {
    const classes = styles(useTheme())();
    const isMdUp = isWidthUp('md', width);
    const alignContent = isMdUp ? 'flex-start' : 'center';
    const avatarContainerClasses = isMdUp ? clsx(classes.profileItems, classes.flexDisplay) : classes.profileItems;
    const contentContainerClasses = isMdUp ? clsx(classes.profileItems, classes.marginAuto) : classes.profileItems;
    const justifyContentContainer = isMdUp ? 'flex-end' : 'center';
    return (
        <Grid container alignContent={alignContent} justify="space-between" className={classes.profileAreaContainer}>
            <Grid item xs={5} sm={4} md={12} className={avatarContainerClasses}>
                <MyAvatar src={Image} />
            </Grid>
            <Grid container item xs={7} sm={8} md={12} justify={justifyContentContainer} className={contentContainerClasses}>
                <AboutMe />
            </Grid>
        </Grid>
    );
};

_ProfileArea.propTypes = {
    width: PropTypes.string,
};

export const ProfileArea = withWidth()(_ProfileArea);