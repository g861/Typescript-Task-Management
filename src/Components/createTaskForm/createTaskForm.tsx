import React , {FC , ReactElement} from 'react';
import {Box , Typography , Stack} from '@mui/material' ; 
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskTitleField } from './_taskTitleField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

export const CreateTaskForm : FC = () : ReactElement =>{
    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant='h6'>
                Create a new Task
            </Typography>

            <Stack sx={{width:'100%'}} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDateField />
                <Stack direction="row" spacing={2}>
                    <TaskSelectField
                        label='Status'
                        name="status"
                        items={
                            [{
                                value: Status.todo,
                                label:Status.todo.toUpperCase()
                            },
                        
                            {
                                value: Status.inProgress,
                                label:Status.inProgress.toUpperCase()
                            },
                            {
                                value: Status.completed,
                                label:Status.completed.toUpperCase()
                            },                       ]
                        }
                    />
                    <TaskSelectField 
                       label='Priority'
                       name="priority"
                       items={
                           [{
                               value: Priority.high,
                               label:Priority.high.toUpperCase()
                           },
                       
                           {
                               value: Priority.normal,
                               label:Priority.normal.toUpperCase()
                           },
                           {
                               value: Priority.low,
                               label:Priority.low.toUpperCase()
                           },                       ]
                       }                
                    />
                </Stack>
            </Stack>
            {/* Task Title */}
            {/* Task Description */}
            {/* Task Date */}
            {/* Task Status */}
            {/* Task Priority */}
        </Box>
    )
}