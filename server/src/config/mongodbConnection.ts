import mongoose, {ConnectOptions} from "mongoose" ;
mongoose.set("strictQuery",false) ;

class DatabaseConnection {
    private uri:string ;
    private options?:ConnectOptions ;

    constructor(uri:string, options?:ConnectOptions){
        this.uri = uri ;
        this.options = options ;
    }
    async dbConnect(){
        try {   
          await mongoose.connect(this.uri, this.options)
          console.log( `🟢 Successfully connected to database`)
        }
        catch(error){
           console.log(`🔴 Unable to connect to database due to error ${error}`) ;
        }  
    } 
    async dbDisconnect(){
         try {
            await mongoose.disconnect() ;
            console.log(`🔴 Disconnected from database `) ;
         }
         catch(error){
             console.log('An error occured') ;
         } 
    } 
}

export default DatabaseConnection ;