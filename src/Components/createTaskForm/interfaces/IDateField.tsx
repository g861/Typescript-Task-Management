import { DisabledInterface } from "./Disabled";

export interface IDateField extends DisabledInterface {
    value ?: Date | null ; 
    onChange ?: (date : Date | null ) => void ;     
}