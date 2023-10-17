import { DisabledInterface } from "./Disabled";

export interface ISelectItems { 
    label:string;
    value:string;
}

export interface ISelectField extends DisabledInterface{
    name ?: string ; 
    value ?: string ; 
    label ?: string ; 
    onChange?: (e: any) => void ; 
    items ?: ISelectItems[] ; 
}