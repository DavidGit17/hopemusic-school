import mongoose from 'mongoose';
import dotenv from "dotenv"


dotenv.config();

//- Connection to Mongodb
const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDb Connected Successfully");
        }).catch((err) => {
            console.log("MongoDb Connection Failed:", err);

        })
}

export default connectToDb;