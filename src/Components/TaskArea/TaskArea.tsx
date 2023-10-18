import { Box, Grid } from '@mui/material';
import React , { FC , ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { Task } from '../task/task';

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
                mb={10}
            >
                <Grid 
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={10}    
                >
                    <TaskCounter />
                    <TaskCounter />
                    <TaskCounter />
                </Grid>
                <Task />
                <Task />
                <Task />
            </Grid>
        </Grid>
    ) ;
} ; 