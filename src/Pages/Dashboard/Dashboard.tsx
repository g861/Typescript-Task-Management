import React ,{FC , ReactElement } from 'react' ; 
import {Grid} from '@mui/material' ; 
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { TaskArea } from '../../Components/TaskArea/TaskArea';
import { Profile } from './../../Components/profile/profile';

export const Dashboard : FC = (): ReactElement =>{
    return(
        <Grid container minHeight="100vh" p={0} m={0}>
            <TaskArea />
            <Sidebar />
        </Grid>
    )
} ; 