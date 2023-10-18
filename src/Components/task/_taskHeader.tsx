import React , { FC , ReactElement } from 'react';
import { Box, Grid , Chip } from '@mui/material';
import { Typography } from '@mui/material';
import format from 'date-fns/format';
import { TaskHeaderInterface } from './interfaces/ITaskHeader';
import  PropTypes from 'prop-types';
export const TaskHeader : FC<TaskHeaderInterface> = (props) :ReactElement => {
    

    const {title='Default Title' , date= new Date()} = props ; 
    return(
        <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            mb={2}
        >
            <Box>
                <Typography variant='h6' >{title}</Typography>
            </Box>
            <Box>
                <Chip variant='outlined' label={format(date,'PPP')} />
            </Box>
        </Box>
    )
}


TaskHeader.propTypes = {
    title:PropTypes.string,
    date:PropTypes.instanceOf(Date) 
}