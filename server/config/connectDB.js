import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`;
const localdbConfig = 'mongodb://127.0.0.1:27017/blood-bank';

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.NODE_ENV === 'production' ? dbConfig : localdbConfig, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => {
        console.log("Connected to mongoose successfully");
        });
    }
    catch (err) {
        // do something
        console.log(`Error: ${err}`);
    }
}

export default connectDB;