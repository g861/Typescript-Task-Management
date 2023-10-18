import { TaskDescriptionInterface } from "./ITaskDescription";
import { TaskFooterInterface } from "./ITaskFooter";
import { TaskHeaderInterface } from "./ITaskHeader";

export interface TaskInterface extends TaskHeaderInterface,TaskDescriptionInterface,TaskFooterInterface {
    id?:string ;
    priority?:string ;
    status ?: string ; 
}