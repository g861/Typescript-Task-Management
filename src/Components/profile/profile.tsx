import React , {FC , ReactElement} from 'react';
import {Avatar,Box,Typography} from "@mui/material" ; 
import  PropTypes  from 'prop-types';

interface IProfile{
    name?:string ; 
}

export const Profile : FC = (props:any) : ReactElement => { 
    
    const {name = 'Grahil'} = props ; 

    return(
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar sx={{
                width:'96px',
                height:'96px',
                backgroundColor:'primary.main',
                marginBottom:'16px'
            }}
            >
                <Typography variant='h5' color="text.primary">
                    {`${name.substring(0,1)}`}
                </Typography>
            </Avatar>
            <Typography variant='h6' color="text.primary">
                Hello , {`${name}`}
            </Typography>
            <Typography variant='body1' color="text.primary">
                This Is Your Personal Task Manager
            </Typography>
        </Box>
    ) ; 
} 