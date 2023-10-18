import React , { FC , ReactElement } from 'react';
import { Box, Grid } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { TaskInterface } from './interfaces/ITask';
import { Priority } from '../createTaskForm/enums/Priority';
import { Status } from '../createTaskForm/enums/Status';
import  PropTypes from 'prop-types';
export const Task :FC <TaskInterface> =(props) : ReactElement => { 
    
    const {
        title = "This is test title",
        date = new Date(),
        description = "This is test description",
        priority = Priority.high,
        status = Status.todo,
        onStatusChange =  (e) => console.log(e) , 
        onClick = (e) => console.log(e) 
        }
     = props ;

    return(
        <Box
            display='flex'
            width="100%"
            justifyContent="center"
            flexDirection="column"
            mb={4}
            p={4}
            sx={{
                width:"100%",
                backgroundColor:'background.paper',
                border:'1px solid',
                borderRadius:'8px',
                borderColor:'warning.light'
            }}
        >
            <TaskHeader />
            <TaskDescription />
            <TaskFooter /> 
        </Box>
    )
}

Task.propTypes = {
    title: PropTypes.string , 
    date: PropTypes.instanceOf(Date) ,
    description:PropTypes.string ,
    priority:PropTypes.string ,
    status:PropTypes.string , 
    onStatusChange : PropTypes.func ,
    onClick : PropTypes.func
}
