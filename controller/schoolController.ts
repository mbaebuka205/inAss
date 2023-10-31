import {Request, Response} from 'express'
import { UNN_SCHOOL } from '../model/schoolModel'
import {client, db} from '../utils/dbConfig'
import { statusCode } from '../utils/statusCode'
import {ObjectId} from 'mongodb'


export const createStdntRec = async (req: Request, res:Response) =>{
    try{
        await client.connect()
        const {name, course, examscore, level} = req.body

        const student = new UNN_SCHOOL(
            name,
            course,
            examscore,
            level
        )

        await db.insertOne(student)

        res.status(statusCode.CREATED).json({
            message:"A student record has just been created",
            data:student
        })
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:"Error",
        })
    }
}


export const readStdntRec = async (req:Request, res:Response)=>{
    try{
        await client.connect()

        const student = await db.find().toArray();

        res.status(statusCode.OK).json({
            message:"Reading student records",
            data:student
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:"Error"
        })
    }
}


export const updateStdntRec = async (req:Request, res:Response) =>{
    try{
        await client.connect()

        const {course, examscore} = req.body
        const {studentID} = req.params

        const student = await db.updateOne({_id: new ObjectId(studentID)},{$set: {course, examscore}})
        res.status(statusCode.OK).json({
            message:"student record is updated",
            data:student
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST).json({
        messahe:"Error"
       })
    }
}


export const deleteStdntRec = async (req:Request, res:Response) =>{
    try{
        await client.connect()

        const {studentID} = req.params

        const student = await db.deleteOne({_id: new ObjectId(studentID)});
        res.status(statusCode.OK).json({
            message:"student record deleted",
            data:student
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:"Error"
        })
    }
}


export const readRecbyName = async (req:Request, res:Response) =>{
    try{
        await client.connect()

        const {name} = req.body

        const student = await db.findOne({name})
        res.status(statusCode.OK).json({
            message:"reading record by name",
            data:student
        })
    }  catch(error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:"Error"
        })
    }
}


export const readRecbyScore = async (req:Request, res:Response) =>{
    try{
        await client.connect()

        const {examscore} = req.body

        const student = await db.findOne({examscore})

        res.status(statusCode.OK).json({
            message:"reading record by score",
            data:student
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:"Error"
        })
    }
}


export const readRecbyCourse = async (req:Request, res:Response) =>{
    try {
        await client.connect()

        const {course} = req.body

        const student = await db.findOne({course})

        res.status(statusCode.OK).json({
            message:"reading record by course",
            data: student
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:"Error"
        })
    }
}