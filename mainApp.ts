import {Application, Request, Response} from 'express'
import { statusCode } from './utils/statusCode'
import students from './router/schoolRouter'

export const mainApp = (app:Application) =>{
    app.use('/api/v1', students)
    app.get('/', (req:Request, res:Response)=>{
        try{
            return res.status(statusCode.OK).json({
                message:"welcome to our api"
            })
        } catch (error) {
           res.status(statusCode.BAD_REQUEST).json({
            message:"Error"
           })
        }
    })
}