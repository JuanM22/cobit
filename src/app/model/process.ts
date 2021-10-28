import { Objective } from "./objective";

export class Process {

    processId: string = '';
    name: string = '';
    objectives: Objective[] = []; 
    average: number = 0;

    constructor (processId: string, name: string){
        this.processId = processId;
        this.name = name;
        this.objectives = [];
        this.average = 0;
    }


}
