import { Question } from "./question";

export class Objective {
    
    objectiveId: number = 0;
    domain: number = 0;
    name: string = '';
    process: string = '';
    questions: Question[] = []

}
