import { MongoClient } from "mongodb";
import dotenv from "dotenv" ;

dotenv.config() ;
const url = process.env.mongodb_uri ;
const databaseName = process.env.database_name ;
const collectionName = process.env.cookie_collection_name ;

export const connectDatabaseAndInsertData = async(userName:string,userEmail:string) => {
     const client = new MongoClient(url as string) ;
     try {
         await client.connect() ;
         const db = client.db(databaseName) ;
         const collection = db.collection(collectionName as string) ;
         const insertedObject = {
             name:userName ,
             email:userEmail ,
         }
         await collection.insertOne(insertedObject) ;
     }
     catch(error){
           console.log(error) ; 
     } 

}

