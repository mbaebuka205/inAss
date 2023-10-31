import {ObjectId} from 'mongodb'

export class UNN_SCHOOL{
    public name: string;
    public course: string;
    public examscore: number;
    public level: number;

    
    constructor(  name:string, course: string, examscore: number, level: number){
    this.name = name,
    this.course = course,
    this.examscore = examscore,
    this.level = level
    }
}