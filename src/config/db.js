
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

async function connect(){

try {
    
  await mongoose.connect(MONGODB_URL);
  console.log("DB Connected Successfully")


} catch (error) {
    console.error(error);
    console.log("DB Connection Failed")
    process.exit(1)
}


}

export default connect;
