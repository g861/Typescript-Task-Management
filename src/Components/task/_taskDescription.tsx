import React , { FC , ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TaskDescriptionInterface } from './interfaces/ITaskDescription';
import  PropTypes  from 'prop-types';
export const TaskDescription:FC<TaskDescriptionInterface> = (props) : ReactElement => {
    
    const {description="This is description"} = props ;

    return(
        <Box>
            <Typography>{description}</Typography>
        </Box>
    )
}

TaskDescription.propTypes = {
    description : PropTypes.string
}