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
    container: {
        height: '100%',
    },
    items: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '35%',
        },
        [theme.breakpoints.up('lg')]: {
            height: '40%',
        },
    },
    avatarBox: {
        display: 'flex',
    },
    contentBox: {
        margin: 'auto',
    },
});

const _ProfileArea = ({ width }) => {
    const classes = styles(useTheme())();
    const isMdUp = isWidthUp('md', width);

    const avatarBoxClasses = clsx(classes.items, isMdUp ? classes.avatarBox : '');
    const contentBoxClasses = clsx(classes.items, isMdUp ? classes.contentBox : '');
    const contentBoxJustify = isMdUp ? 'flex-end' : 'center';
    const containerAlignContent = isMdUp ? 'flex-start' : 'center';

    return (
        <Grid
            container
            alignContent={containerAlignContent}
            justify="space-between"
            className={classes.container}
        >
            <Grid
                item
                xs={5} sm={4} md={12}
                className={avatarBoxClasses}
            >
                <MyAvatar src={Image} />
            </Grid>
            <Grid
                container item
                xs={7} sm={8} md={12}
                justify={contentBoxJustify}
                className={contentBoxClasses}
            >
                <AboutMe />
            </Grid>
        </Grid>
    );
};

_ProfileArea.propTypes = {
    width: PropTypes.string,
};

export const ProfileArea = withWidth()(_ProfileArea);