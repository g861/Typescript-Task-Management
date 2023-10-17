import React, { FC , ReactElement , useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from "./interfaces/IDateField";
import  PropTypes  from 'prop-types';

export const TaskDateField : FC<IDateField> = (props) : ReactElement =>{ 

    const {value = new Date() , disabled = false , onChange =(date) => console.log(date) } = props ; 

    const [date,setDate] = useState<Date | null>(null) ; 

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker 
                    label="Task Date" 
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    format="dd/MM/yyyy"
                />
            </LocalizationProvider>
        </>
    )  
} ; 

TaskDateField.propTypes = {
    disabled :PropTypes.bool ,
    onChange : PropTypes.func,
    value : PropTypes.instanceOf(Date)
}