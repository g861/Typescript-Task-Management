import React , {FC , ReactElement} from 'react';
import {Box , Typography, TextField} from '@mui/material' ; 
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types' ;

export const TaskDescriptionField : FC<ITextField> = (props) : ReactElement => {

    const {
        onChange = (e) => console.log(e) , 
        disabled =false } = props ; 

    return(
        <TextField
        id='description'
        name='description'
        label="Task Description"
        placeholder='Description'
        variant='outlined'
        size='small'
        fullWidth
        disabled={disabled}
        onChange={onChange} 
        multiline
        rows={4}
    />
    ) ; 
}

TaskDescriptionField.propTypes = {
    onChange : PropTypes.func, 
    disabled: PropTypes.bool, 
}