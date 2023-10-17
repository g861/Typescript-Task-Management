import React , {FC , ReactElement} from 'react' ; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ISelectField } from './interfaces/ISelectField';
import  PropTypes  from 'prop-types';

export const TaskSelectField : FC<ISelectField> = (props) : ReactElement => {
    
    const {
        value,
        label='Select Box',
        name = 'selectBox' , 
        items= [{value:'', label:'Add Items'}],
        disabled = false , 
        onChange = (e) => console.log(e)  
    } = props ; 
    
    return(
        <FormControl fullWidth>
            <InputLabel id={`${name}-id`}>{label}</InputLabel>
            <Select
                labelId='status'
                id={`${name}-id-select`}
                value=""
                label={label}
                name={name}
                disabled={disabled}
                onChange={onChange}
            >
                {
                    items.map((item,index) => (
                        <MenuItem key={item.value+index} value={item.value}>{item.label}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

TaskSelectField.propTypes = { 
    onChange : PropTypes.func ,
    label : PropTypes.string ,
    name : PropTypes.string , 
    disabled : PropTypes.bool ,
    items : PropTypes.arrayOf(
        PropTypes.shape({
            value:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired ,
        }).isRequired
    ),
}