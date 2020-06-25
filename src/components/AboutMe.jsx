import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const AboutMe = () => {
    return (
        <Grid item xs={12} sm={10} md={10}>
            <Typography variant="h5" color='textPrimary' gutterBottom>
                Prateek Srivastava
            </Typography>
            <Typography variant="body2" color='textSecondary' gutterBottom>
                prateeksrt2009@gmail.com
            </Typography>
            <Typography variant="body1" color='textPrimary'>
                Full stack developer
            </Typography>
        </Grid>
    );
};