import express, {Application} from 'express'
import cors from 'cors'
import './utils/dbConfig'
import { mainApp } from './mainApp';

const port:number = 2001;
const app:Application = express()

app.use(cors())
app.use(express.json())
mainApp(app)

const server = app.listen(port, ()=>{
    console.log("server is connected...")
})
process.on('uncaughtException', (error:Error)=>{
    console.log('uncaughtException: ', error)
    process.exit(1)
})
process.on('rejectionHandled', (reason:any)=>{
    console.log('rejectionHandled: ', reason)
    server.close(()=>{
        process.exit(1)
    })
})