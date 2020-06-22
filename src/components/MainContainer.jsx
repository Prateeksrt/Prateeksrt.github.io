import React from 'react';
import './MainContainer.scss';
import './Common.scss';
import { ContentArea } from './ContentArea';
import { ProfileArea } from './ProfileArea';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export const MainContainer = () => {
    const theme = useTheme();
    const biggerThanSm = useMediaQuery(theme.breakpoints.up('sm'));
    const direction = 'row';
    const profileHight = biggerThanSm ? 'profile-height-sm-up' : 'profile-height-sm-down';
    const contentHight = biggerThanSm ? 'content-height-sm-up' : 'content-height-sm-down';
    return (
        <Grid container className="app-body" justify="center">
            <Grid container item sm={9} xs={12} className="app" direction={direction} >
                <Grid item sm={3} xs={12} className={profileHight}>
                    <ProfileArea />
                </Grid>
                <Grid item sm={9} xs={12} className={contentHight}>
                    <ContentArea />
                </Grid>
            </Grid>
        </Grid>
    )
};
