import { Box, Grid } from '@mui/material';
import React , { FC , ReactElement } from 'react';
import { format } from 'date-fns';

export const TaskArea : FC = () :ReactElement => { 
    return(
        <Grid item md={8} px={4}>
            <Box>
                <h2>Status Of Your Tasks as On {format(new Date(), 'PPPP')} </h2>
            </Box>

            <Grid 
                container
                display="flex"
                justifyContent="center"
            >
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </Grid>
    ) ;
} ; 