import http from 'http' ;
import express from 'express' ;
import dotenv from 'dotenv' ;
import morgan from 'morgan' ;
import cors from 'cors' ;
import cookieParser from 'cookie-parser' ;
import DatabaseConnection from './src/config/mongodbConnection';
dotenv.config() ;

const app = express() ;
const server = http.createServer(app) ;
const PORT_NO = process.env.port_no ;
const apiVersion = process.env.api_endpoint_base ;
const corsOptions = {
    origin:"http://192.168.43.148:8081"
}
app.use(cors(corsOptions)) ;
const dbObject = new DatabaseConnection(process.env.mongodb_uri!) ;
dbObject.dbConnect() ;
app.use(cookieParser()) ;
app.use(morgan('dev')) ;
app.use(express.json()) ;
app.get("/",(req,res) => {
     res.json({message:'Application is running'}) ;
})
server.listen(PORT_NO, () => {
    console.log(`Successfully launched app at port no ${PORT_NO}`) ; 
})
