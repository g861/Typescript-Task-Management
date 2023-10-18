import React , {FC , ReactElement} from 'react';
import {Avatar,Box,Typography} from "@mui/material" ; 
import  PropTypes  from 'prop-types';
import { TaskCounterInterface } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColour } from './helpers/emitCorrectBorderColour';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';

export const TaskCounter : FC<TaskCounterInterface> = (props) => {

    const {value=10 , status = Status.todo} = props ;

    return(
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar 
                    sx={{
                        backgroundColor:'transparent',
                        border: '5px solid',
                        width:'96px',
                        height:'96px',
                        marginBottom:'16px',
                        borderColor:`${emitCorrectBorderColour(status)}`
                    }}
                >
                    <Typography color='#fff' fontSize='32px'>10</Typography>
                </Avatar>
                <Typography>{`${emitCorrectLabel(status)}`}</Typography>
            </Box>
        </>
    )
}
TaskCounter.propTypes = {
    value:PropTypes.number ,
    status:PropTypes.oneOf([
        Status.todo , Status.inProgress , Status.completed
    ])
}