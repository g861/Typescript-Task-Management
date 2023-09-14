import React from "react";
import { DisabledInterface } from "./Disabled";

export interface ITextField extends DisabledInterface { 
    onChange ?: (
        e:React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
            >,
    ) => void ; 
}